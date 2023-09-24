import express, { Request, Response, response } from 'express';
import dotenv from 'dotenv';
import { logTime } from './functions';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript server');
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('hello');
});

app.listen(port, () => {
  console.log(
    `[server] ${logTime()}: Server is running at http://localhost:${port}`
  );
});
