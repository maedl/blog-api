import mongoose, { Document, Schema } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  description: string;
  content: string[];
  comments: { id: string; text: string; likes: number }[];
  likes: number;
}

const commentSchema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  likes: { type: Number, required: true },
});

const articleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: [String], required: true },
  comments: { type: [commentSchema], default: [] },
  likes: { type: Number, default: 0 },
});

export const Article = mongoose.model<IArticle>('Article', articleSchema);
