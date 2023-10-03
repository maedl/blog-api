import express, { Request, Response } from 'express';
import { mockArticles } from './models/IArticle';

const router = express.Router();

router.put('/:id/like', (req: Request, res: Response) => {
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

router.post('/:id/comments', (req: Request, res: Response) => {
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

export default router;
