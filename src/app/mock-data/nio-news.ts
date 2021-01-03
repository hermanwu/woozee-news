import { newsSource } from '../models/news-source.enum';
import { News } from '../models/news.model';

export const nioNews: News[] = [
  {
    source: newsSource.OFFICIAL,
    title: '特斯拉2020年第四季度汽车生产和交付更新。',
    date: new Date('2021-01-02T00:00:00'),
    comments: [
      {
        text: '第四季度交付180,570, 全年交付499,550',
        comments: [
          {
            text:
              '击败了华尔街预期174,000辆，但没有超过50万整数大关，所以不能算重大利好。',
          },
          { text: '季度同比增长61.2%(112,000), 年同比增长77.6%(281,520).' },
        ],
      },
      {
        text: 'Y型车已在上海开始生产，预计不久将开始交付.',
        comments: [
          {
            text:
              '大陆特斯拉Y型车降价到30万以下，Tesla继续全球扩张，继续挤压燃油车市场。',
          },
        ],
      },
    ],
    sourceLink:
      'https://ir.tesla.com/press-release/tesla-q4-2020-vehicle-production-deliveries',
  },
  {
    source: newsSource.OFFICIAL,
    title: 'NIO Inc.提供2020年12月，第四季度和全年的交付更新',
    date: new Date('2021-01-03T00:00:00'),
    comments: [
      {
        text:
          '蔚来汽车在2020年共交付了43728辆汽车，月同比增长112.6％， 季度同比增长111.0％，年同比增长112.6％',
        comments: [
          {
            text:
              '蔚来有些和特斯拉较劲的意思。蔚来基数小，未来的增长率可能一直会比特斯拉高。',
          },
        ],
      },

      {
        text:
          '创新的电池即服务（BaaS）模式在我们的用户中已显示出很高的知名度。通过选配100kWh电池组，BaaS在12月的新订单中的渗透率已达到40％以上，这表明BaaS已被用户广泛接受。',
        comments: [
          {
            text:
              '解决当前电池顾虑的最好方案。让潜在车主不必担心有关电池的任何问题。',
          },
        ],
      },
    ],
    sourceLink:
      'https://ir.nio.com/news-events/news-releases/news-release-details/nio-inc-provides-december-fourth-quarter-and-full',
  },
  {
    source: newsSource.BOA_GLOBAL_RESEARCH,
    title: '1月9日 蔚来日有什么看点?',
    date: new Date('2020-12-31T00:00:00'),
    comments: [
      {
        text:
          '发布电动轿车。。。它将配备先进的车辆芯片，以实现全面的自动驾驶技术。Mobileye可能会与NIO合作在中国推出自动驾驶出租车。',
        comments: [
          {
            text:
              '蔚来日重点关注车辆芯片和自动驾驶领域进展，这些可能成为重大利好。下周可以开始布局。',
          },
        ],
      },

      {
        text:
          '预计蔚来汽车将推出150kWh用来增强驾驶性能的新订阅包。 还会在二手车中推出新计划保证二手车交易顺畅。 ',
        comments: [
          {
            text:
              '像我前面说的，电池交换/升级和订阅模式目前是NIO一个的和特斯拉区别的最大亮点',
          },
        ],
      },

      {
        text: '蔚来会宣布与国家电网合作扩大建造100个充电/换电站。',
        comments: [
          {
            text: '和国资企业更多合作可能是NIO在中国市场的一个优势。',
          },
        ],
      },
      {
        text: '美银认为NIO的基本面已经触底...目标价位提升至US$59。',
        comments: [
          {
            text: 'NIO目前的成长风险很小。',
          },
        ],
      },
    ],
    sourceLink:
      'https://www.reuters.com/article/us-apple-autos-exclusive/exclusive-apple-targets-car-production-by-2024-and-eyes-next-level-battery-technology-sources-idUSKBN28V2PY',
  },
];
