import { newsSource } from '../models/news-source.enum';
import { News } from '../models/news.model';

export const newsList: News[] = [
  {
    source: newsSource.BLOOMBERG,
    title: 'Alibaba Shares Tumble on China Monopoly Probe',
    date: new Date('2020-12-24T00:00:00'),
    keyPoints: [
      'Fell 13% in its biggest one-day drop',
      'Down 30% from an October peak',
      'The People’s Daily warned Thursday that fighting alleged monopolies was now a top priority.',
      'a warning that winds have shifted ... and business operation could face long-term headwinds',
    ],
    thoughts: [],
    imageLinks: [],
    relatedStocks: ['BABA', 'TCEHY', 'PDD'],
  },

  {
    source: newsSource.CHINA_DAILY,
    title: '实现平台经济更加规范更有活力更高质量发展',
    date: new Date('2020-12-25T00:00:00'),
    keyPoints: [
      '阿里巴巴集团控股有限公司因“二选一”等涉嫌垄断行为，被市场监管总局依法立案调查。',
      '大型互联网平台企业应该带头强化行业自律，进一步增强社会责任感，维护良好的互联网经济生态体系。',
      '事实上，互联网行业从来不是、也不应该成为反垄断的法外之地。',
      '正是欧美国家通过反垄断制约了微软、IBM等科技巨头，才促使谷歌、苹果、脸书、亚马逊等互联网新锐诞生和成长，并为行业带来强劲活力。',
    ],
    thoughts: [],
    imageLinks: [],
    relatedStocks: ['BABA', 'TCEHY', 'PDD'],
  },

  {
    source: newsSource.CNBC,
    title: 'Elon Musk once considered selling Tesla to Apple.',
    date: new Date('2020-12-21'),
    keyPoints: [],
    thoughts: [],
    imageLinks: [
      'https://lh3.googleusercontent.com/pw/ACtC-3fMSk9aS5cApCkcONB7f_VrJhBVGZAamXOqmbf95ac_3e6UYkze3TT4Rea3Hh0L5X-arSZj-kNGpThrzw4l1ijlTa9dgXYJ9rcyDpW-BwG42QX_z2omQmj7CjLgY_8VTo8C3WqEyyqC5DBpz2wOh4tt=w856-h860-no?authuser=3',
    ],
    relatedStocks: ['TSLA', 'AAPL', 'NIO', 'XPEV', 'LI', 'VLDR', 'LAZR'],
  },
];
