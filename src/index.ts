import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { logTime } from './functions';
import articlesRouter from './articlesRouter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || '';

app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  if (MONGODB_URI === '') {
    console.log('Database URI is empty, check .env file!');
  }
  await mongoose.connect(MONGODB_URI);
  console.log('Database connected');
}

app.use('/api/articles', articlesRouter);

app.listen(port, () => {
  console.log(
    `[server] - ${logTime()}: Server is running at http://localhost:${port}`
  );
});
