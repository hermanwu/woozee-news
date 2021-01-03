import { newsSource } from '../models/news-source.enum';
import { News } from '../models/news.model';

export const sqNews: News[] = [
  {
    source: newsSource.MORGAN_STANLEY,
    title: "Digging into Digital Wallets: Who's Winning in C2B",
    comments: [
      {
        text: 'massive progress in growing digital wallet adoption',
      },
      {
        text:
          'Consumer perception of existing digital wallets favors the incumbent, PayPal, followed by Apple Pay',
      },
      {
        text: 'Paypal and Venmo is leading',
      },
    ],
  },
];
