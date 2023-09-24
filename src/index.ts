import express, { Request, Response, response } from 'express';
import dotenv from 'dotenv';
import { logTime } from './functions';
import { mockArticles } from './models/IArticle';
import { log } from 'console';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.put('/api/articles/:id/like', (req: Request, res: Response) => {
  const { id } = req.params;

  console.log(id);

  const article = mockArticles.find((article) => article.id === id);

  if (article) {
    article.likes += 1;
    res.status(200).json(article.likes);
  } else {
    res.send('not found');
  }

  console.log(mockArticles[0]);
});

app.listen(port, () => {
  console.log(
    `[server] ${logTime()}: Server is running at http://localhost:${port}`
  );
});
