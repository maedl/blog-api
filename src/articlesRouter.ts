import express, { Request, Response } from 'express';
import { Article, IArticle } from './models/IArticle';

const router = express.Router();

router.post('/new-article', async (req: Request, res: Response) => {
  const articleData = req.body;

  const newArticle = new Article(articleData);

  try {
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: 'Error saving the article', error });
  }
});

router.put('/:id/like', (req: Request, res: Response) => {
  const { id } = req.params;

  const article = articles.find((article: IArticle) => article.id === id);

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

  const article = articles.find((article: IArticle) => article.id === id);

  if (article) {
    article.comments.push(comment);
    res.status(200).json(article.comments);
    console.log(article.comments);
  } else {
    res.send('not found');
  }
});

export default router;
