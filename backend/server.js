import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
import recommendRoute from './routes/recommend.js';

dotenv.config();

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: '*'
});

app.register(recommendRoute);


// 🔑 REQUIRED FOR RENDER
const PORT = process.env.PORT || 3001;

await app.listen({
  port: PORT,
  host: '0.0.0.0'
app.get('/', async () => {
  return { status: 'ok', message: 'Movie Recommendation API running' };
});


console.log(`🚀 Server running on port ${PORT}`);
