import { Blog } from '../models/blog.model';
import { Thought } from '../models/thought.model';
import { appleCarNews, newsList } from './news-list';

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
  question:
    'Apple is building EV to compete with Tesla? How to invest EV market?',
  news: appleCarNews,
  comments: [
    {
      text: 'Apple has the incentives and resources to build an EV.',
      comments: [
        {
          text:
            'Huge cash + supply chain experience + chip, battery and lidar research capability.',
        },
      ],
      imageLinks: [
        'https://lh3.googleusercontent.com/pw/ACtC-3d1unjDJVtKLfaTru4U0MW7o4tUABDKl7WQgKwetN6uB6Ge0YV5MVxwBFCe6IPnQASRGKY8sLtyc1w8qpXEi7WPVuewyB73lV10T-T9Ui6brxVYDFhp-NN0oCoP8N9rcQgajL5bXahjRsmn5HFPffZz=w1318-h704-no?authuser=3',
      ],
    },
    {
      text: 'EV is the hottest area and our future for sure.',
      comments: [
        {
          text: 'Consumer understanding.',
        },
        {
          text: 'Companies Investment.',
        },
        {
          text: 'Government Support.',
        },
      ],
    },
    {
      text:
        'Invest in the whole supply chain, Invest in leaders, Invest gradually. ',

      comments: [
        {
          text: 'AUTO maker (70%-90%): i.e., TSLA, NIO, AAPL',
        },
        {
          text: 'Battery / Energy related (5%-15%): i.e., SBE, QS',
        },
        {
          text: 'Lidar related (5%-15%): i.e., VLDR, LAZR',
        },
        {
          text:
            'Market leaders receive positive feedback loop: more users, more feedbacks, more scalable,  more resources.',
        },
        {
          text: 'Stock could see a 20%+ pull back. (i.e. TSLA, SBE).',
        },
      ],
      imageLinks: [
        'https://lh3.googleusercontent.com/o-jmcPgzG80THa5-PSEJBP-VE1HNeWfDCniZ8Dgn1CU-skkHyYwkeV9efvUa_ob6s7UqdZbW54Y8RnITB8eEF6nvnPZtyuPzyve54Wc_7JSdZUNSoaKgwQB4bM7UUlIM-WpytyaUX2nqDk6QDNImDqTiGvl9W5nAgtZLO2OYSCMs4sTX5lgUN3n8HhJGdj7wrTHiWvPKs-GXc6D4OyvcYurhHLfNtllkaTZdVj5lhmToRKjP2wsT4O5WwIkg86qjbS4y1yGUSz8DNjgR9yRQdUYhehbKsBclarhn8r0Cv7noUQ5gdRa2i2FqjNhZ5hzzbUGNZIfnuPATGUb8Ev15TjRyM3z3wjnxcOjJ4G8eeJDxXCrr4qYVSHjL5unj8w9S_hAjI1EGA-IvZPMYJMfb1tRh7zKZz8QZL398h7YkiL1HFuVM5OFpBsx0ygcYDVBIvtG7D9sxYqPzND9QGOJHghVTyqpFK0ojgED3k2MztRtpjc-q4srEaL0bRkEpuD4nNACcwISkDCG0i4R-cdnsNbQQlRhJIpHnrrLRg7N988Ucum2HngDWUaglHcrXoH8LscjSJrJgiJMcobKtdHWBWQqlWcMCoCBEUsdPziEjqPJhMIfN79oFkKAd5pMrag1EsQUcLABq-sXIOBV7wVUV17168lpPTWc4yRW1LfjsqSKMk0HxvXpFyb6t16Wh=w2022-h872-no?authuser=3',
      ],
    },
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
