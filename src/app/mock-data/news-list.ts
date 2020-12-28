import { newsSource } from '../models/news-source.enum';
import { News } from '../models/news.model';

export const appleCarNews: News[] = [
  {
    source: newsSource.reuters,
    title:
      'Exclusive: Apple targets car production by 2024 and eyes "next level" battery technology - sources',
    date: new Date('2020-12-21T00:00:00'),
    comments: [
      {
        text:
          'Targeting 2024 to produce a passenger vehicle that could include its own breakthrough battery technology',
        comments: [
          {
            text: 'Apple confirms the future of EV.',
          },
          {
            text: '2021-2022 prototype needs to be released.',
          },
        ],
      },
      {
        text:
          'A new battery design that could “radically” reduce the cost of batteries and increase the vehicle’s range',
        comments: [
          {
            text: 'Battery is the biggest pain point of EV.',
          },
        ],
      },
      {
        text:
          'Apple’s car might feature multiple lidar sensors for scanning different distances',
        comments: [
          {
            text: 'Lidar improves safety and accuracy in self-driving.',
          },
          {
            text: 'Lidar was expensive before, but much cheaper now.',
          },

          {
            text: 'Lidar has more upsides compared to a couple years ago .',
          },
        ],
      },
    ],
    relatedStocks: ['AAPL', 'GOOGL', 'TSLA'],
    sourceLink:
      'https://www.reuters.com/article/us-apple-autos-exclusive/exclusive-apple-targets-car-production-by-2024-and-eyes-next-level-battery-technology-sources-idUSKBN28V2PY',
  },

  {
    source: newsSource.CNBC,
    title: 'Elon Musk once considered selling Tesla to Apple.',
    date: new Date('2020-12-22T00:00:00'),
    comments: [
      {
        text:
          'Tesla CEO Elon Musk tweeted on Tuesday, “During the darkest days of the Model 3 program, I reached out to Tim Cook to discuss the possibility of Apple acquiring Tesla (for 1/10 of our current value). He refused to take the meeting.”',
        comments: [
          {
            text: 'Self driving software was probably the main focus before.',
          },
          {
            text:
              'Now, companies realize that self driving requires software and hardware closely integrated.',
          },
        ],
      },
      {
        text:
          'Tesla is the hard path. We have 100 times less money than Apple, so of course they can afford to pay more.',
        comments: [
          {
            text:
              'Apple has money and will be the biggest competitor of Tesla.',
          },
        ],
      },
    ],
    relatedStocks: ['TSLA', 'AAPL', 'NIO', 'XPEV', 'LI', 'VLDR', 'LAZR'],
    sourceLink:
      'https://www.cnbc.com/2020/12/22/elon-musk-pondered-sale-of-tesla-to-apple-says-tim-cook-wouldnt-meet.html',
  },
  {
    source: newsSource.CAR_THINGS,
    title: '苹果造车的秘密，都在这了',
    date: new Date('2020-12-21T00:00:00'),
    comments: [
      {
        text: '苹果为什么要造车？抓住时代风口。不造车公司没有新的增长点。',
        imageLinks: [
          'https://lh3.googleusercontent.com/pw/ACtC-3d1unjDJVtKLfaTru4U0MW7o4tUABDKl7WQgKwetN6uB6Ge0YV5MVxwBFCe6IPnQASRGKY8sLtyc1w8qpXEi7WPVuewyB73lV10T-T9Ui6brxVYDFhp-NN0oCoP8N9rcQgajL5bXahjRsmn5HFPffZz=w1318-h704-no?authuser=3',
        ],
        comments: [
          {
            text: 'Apple has no revolutionary product recently.',
          },
        ],
      },
      {
        text: '苹果造车缺钱吗？苹果手握1918.3亿美元现金。人才也有，专利也有。',
        comments: [
          {
            text: 'Cash could buy Airbnb + Uber.',
          },
        ],
      },
      {
        text: '苹果造车的进展如何？正建设供应链体系。',
        comments: [
          {
            text:
              'Auto manufacturing is hard, but Tim Cook is supply chain expert.',
          },
        ],
      },
    ],
    relatedStocks: ['AAPL', 'TSLA', 'NIO'],
    sourceLink: 'https://mp.weixin.qq.com/s/eujQcfs2tdTuqeDDc4OP9g',
  },
];

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
];
