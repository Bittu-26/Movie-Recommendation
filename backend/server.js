
import Fastify from 'fastify';
import dotenv from 'dotenv';
import recommendRoute from './routes/recommend.js';

dotenv.config();

const app = Fastify({ logger: true });

app.register(recommendRoute);

app.listen({ port: 3001 }, () => {
  console.log('Backend running on http://localhost:3001');
});
