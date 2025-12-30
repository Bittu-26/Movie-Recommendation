import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
import recommendRoute from './routes/recommend.js';

dotenv.config();

const app = Fastify({ logger: true });

// CORS
await app.register(cors, {
  origin: '*',
});

// Health route (SAFE)
app.get('/', async () => {
  return { status: 'ok', message: 'Movie Recommendation API running' };
});

// API routes
app.register(recommendRoute);

// REQUIRED FOR RENDER
const PORT = process.env.PORT || 3001;

await app.listen({
  port: PORT,
  host: '0.0.0.0',
});

console.log(`🚀 Server running on port ${PORT}`);
