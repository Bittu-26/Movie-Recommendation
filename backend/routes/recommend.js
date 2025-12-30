import OpenAI from "openai";
import db from "../db/database.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function recommendRoute(fastify) {
  fastify.post("/recommend", async (request, reply) => {
    const { preference } = request.body;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Suggest 3 to 5 movies based on this preference: ${preference}. Return only movie names as a list.`,
          },
        ],
      });

      const movies = completion.choices[0].message.content
        .split("\n")
        .filter(Boolean);

      db.prepare(
        "INSERT INTO recommendations (user_input, recommended_movies) VALUES (?, ?)"
      ).run(preference, JSON.stringify(movies));

      return { movies };
    } catch (error) {
      // Graceful fallback for 429 / quota issues
      if (error.status === 429) {
        return {
          movies: [
            "Inception",
            "Interstellar",
            "Mad Max: Fury Road",
            "The Dark Knight",
            "Edge of Tomorrow",
          ],
        };
      }

      reply.code(500).send({ error: "Failed to fetch recommendations" });
    }
  });
}
