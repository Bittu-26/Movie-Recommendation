fastify.post('/recommend', async (request, reply) => {
  const { preference } = request.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'user', content: `Suggest 3 to 5 movies based on: ${preference}` }
      ],
    });

    const movies = completion.choices[0].message.content
      .split('\n')
      .filter(Boolean);

    return { movies };

  } catch (error) {
    // 🔑 Graceful fallback
    if (error.status === 429) {
      return {
        movies: [
          "Inception",
          "Interstellar",
          "Mad Max: Fury Road",
          "The Dark Knight",
          "Edge of Tomorrow"
        ]
      };
    }

    reply.code(500).send({ error: "Failed to fetch recommendations" });
  }
});
