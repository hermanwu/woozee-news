import { newsSource } from '../models/news-source.enum';
import { News } from '../models/news.model';

export const appleCarNews: News[] = [];

export const newsList: News[] = [
  {
    source: newsSource.BLOOMBERG,
    title: 'Alibaba Shares Tumble on China Monopoly Probe',
    date: new Date('2020-12-24T00:00:00'),
    comments: [
      { text: 'Fell 13% in its biggest one-day drop' },
      { text: 'Down 30% from an October peak' },
      {
        text:
          'The People’s Daily warned Thursday that fighting alleged monopolies was now a top priority.',
      },
      {
        text:
          'a warning that winds have shifted ... and business operation could face long-term headwinds',
      },
    ],
    relatedStocks: ['BABA', 'TCEHY', 'PDD'],
  },

  {
    source: newsSource.CHINA_DAILY,
    title: '实现平台经济更加规范更有活力更高质量发展',
    date: new Date('2020-12-25T00:00:00'),
    comments: [
      {
        text:
          '阿里巴巴集团控股有限公司因“二选一”等涉嫌垄断行为，被市场监管总局依法立案调查。',
      },
      {
        text:
          '大型互联网平台企业应该带头强化行业自律，进一步增强社会责任感，维护良好的互联网经济生态体系。',
      },
      { text: '事实上，互联网行业从来不是、也不应该成为反垄断的法外之地。' },
      {
        text:
          '正是欧美国家通过反垄断制约了微软、IBM等科技巨头，才促使谷歌、苹果、脸书、亚马逊等互联网新锐诞生和成长，并为行业带来强劲活力。',
      },
    ],
    relatedStocks: ['BABA', 'TCEHY', 'PDD'],
  },

  {
    source: newsSource.CNBC,
    title: 'Elon Musk once considered selling Tesla to Apple.',
    date: new Date('2020-12-21'),
    comments: [],
    relatedStocks: ['TSLA', 'AAPL', 'NIO', 'XPEV', 'LI', 'VLDR', 'LAZR'],
  },
];
