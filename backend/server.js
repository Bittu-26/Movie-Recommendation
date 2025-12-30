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

// 🔑 CRITICAL FIX FOR RENDER
const PORT = process.env.PORT || 3001;

app.listen(
  {
    port: PORT,
    host: '0.0.0.0'
  },
  (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    console.log(`Server running on ${address}`);
  }
);
