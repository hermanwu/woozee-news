import { newsSource } from './news-source.enum';

export interface News {
  source?: newsSource;
  date?: Date;
  title?: string;
  author?: string;
  keyPoints?: string[];
  imageLinks?: string[];
  relatedStocks?: string[];
  thoughts?: string[];
}
