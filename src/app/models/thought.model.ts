import { Comment } from './comment.model';
import { News } from './news.model';

export interface Thought {
  date: Date;
  question: string;
  news?: News[];
  comments?: Comment[];
  stock: string;
}
