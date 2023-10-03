import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { logTime } from './functions';
import { mockArticles } from './models/IArticle';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.put('/api/articles/:id/like', (req: Request, res: Response) => {
  const { id } = req.params;

  const article = mockArticles.find((article) => article.id === id);

  if (article) {
    article.likes += 1;
    res.status(200).json(article.likes);
    console.log(article.comments);
  } else {
    res.send('not found');
  }
});

app.post('/api/articles/:id/comments', (req: Request, res: Response) => {
  const { id } = req.params;
  const { comment } = req.body;

  const article = mockArticles.find((article) => article.id === id);

  if (article) {
    article.comments.push(comment);
    res.status(200).json(article.comments);
    console.log(article.comments);
  } else {
    res.send('not found');
  }
});

app.listen(port, () => {
  console.log(
    `[server] - ${logTime()}: Server is running at http://localhost:${port}`
  );
});
