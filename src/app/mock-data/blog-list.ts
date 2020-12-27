import { Blog } from '../models/blog.model';
import { Thought } from '../models/thought.model';
import { newsList } from './news-list';

export const thought1: Thought = {
  date: new Date(),
  question: 'Alibaba dropped 13%, can we buy Alibaba?',
  news: [newsList[0], newsList[1]],
  comments: [
    {
      text: '美国现在也有类似事情发生。政府这次有下重手的决心，建议观望2周。',
    },
    {
      text:
        '风向变了，中国大型互联网公司肯定会面临更多监管，成长速度会降低。如果你看重成长率，可以考虑换成更小的公司。',
    },
    {
      text: '当下行趋势明显后一定要控制风险，控制仓位，不要加仓，设置止损。',
    },
    {
      text:
        '阿里巴巴还有有最精英的人才，也经过市场残酷竞争，还有其他产业，包括阿里云',
    },
    {
      text: '200有支撑。6000亿美元估值比较合理（亚马逊16000亿)',
    },
    {
      text:
        '监管风向变了，但中国的电商发展的大趋势没有变。而且电商和游戏，地产不一样，是刚需，可以少量加仓。',
    },
  ],
  stock: 'BABA',
};

export const thought2: Thought = {
  date: new Date(),
  question: 'Apple revealing car in 2024? How to invest EV market?',
  news: [newsList[1]],
  comments: [
    { text: 'Apple could be the biggest competitor of Tesla' },
    { text: 'Tim Cook is famous for his logistics management' },
    { text: 'EV will be the future and hottest market next year.' },
  ],
  stock: 'AAPL',
};

export const blog1: Blog = {
  date: new Date('2020-12-24T00:00:00'),
  thoughts: [thought1],
};

export const blog2: Blog = {
  date: new Date('2020-12-26T00:00:00'),
  thoughts: [thought2],
};

export const blogList = [blog2, blog1];
