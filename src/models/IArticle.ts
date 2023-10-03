export interface IArticle {
  id: string;
  title: string;
  description: string;
  content: string[];
  comments: IComment[];
  likes: number;
}

interface IComment {
  id: string;
  text: string;
  likes: number;
}

export const mockArticles: IArticle[] = [
  {
    id: '1',
    title: 'Headline with great info 1',
    description: 'I describe this article',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    likes: 0,
    comments: [
      { id: '1', text: 'I like this article', likes: 0 },
      { id: '2', text: 'I like this article', likes: 0 },
    ],
  },
  {
    id: '2',
    title: 'Headline with great info 2',
    description: 'I describe this article',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    likes: 0,
    comments: [{ id: '1', text: 'I like this article', likes: 0 }],
  },
  {
    id: '3',
    title: 'Headline with great info 3',
    description: 'I describe this article',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    likes: 0,
    comments: [{ id: '1', text: 'I like this article', likes: 0 }],
  },
];
