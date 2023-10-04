import express, { Request, Response } from 'express';
import { Article } from './models/IArticle';

const router = express.Router();

router.get('/summary', async (req: Request, res: Response) => {
  try {
    const articles = await Article.find(
      {},
      { title: 1, description: 1, id: 1 }
    );
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching articles');
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).send({ message: 'Article not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error fetching article' });
  }
});

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

router.put('/:id/like', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).send({ message: 'Article not found' });
    }

    article.likes += 1;

    await article.save();

    res.status(200).json(article.likes);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error updating likes' });
  }
});

router.post('/:id/new-comment', async (req: Request, res: Response) => {
  const { id } = req.params;
  const comment = req.body;

  try {
    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).send({ message: 'Article not found' });
    }

    article.comments.push(comment);

    await article.save();

    res.status(200).json(article.comments);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error adding comment' });
  }
});

export default router;
