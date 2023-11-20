import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  description: string;
  content: string[];
  comments: {
    _id: Types.ObjectId;
    author: string;
    text: string;
    likes: number;
  }[];
  likes: number;
}

const commentSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

const articleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: [String], required: true },
  comments: { type: [commentSchema], default: [] },
  likes: { type: Number, default: 0 },
});

export const Article = mongoose.model<IArticle>('Article', articleSchema);
