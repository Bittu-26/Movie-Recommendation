
import db from '../db/database.js';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function (fastify) {
  fastify.post('/recommend', async (request, reply) => {
    const { preference } = request.body;

    const prompt = `Suggest 3 to 5 movies based on this preference: ${preference}. Return only movie names as a list.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }]
    });

    const movies = completion.choices[0].message.content
      .split('\n')
      .filter(Boolean);

    db.prepare(
      'INSERT INTO recommendations (user_input, recommended_movies) VALUES (?, ?)'
    ).run(preference, JSON.stringify(movies));

    return { movies };
  });
}
