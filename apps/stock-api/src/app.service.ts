import { Injectable } from '@nestjs/common';
import { FundamentalService } from './services/fundamental.service';
import { ValuationService } from './services/valuation.service';
import { SentimentService } from './services/sentiment.service';
import { ScoreService } from './services/score.service';

@Injectable()
export class AppService {

  constructor(
    private fundamentals: FundamentalService,
    private valuation: ValuationService,
    private sentiment: SentimentService,
    private score: ScoreService,
  ) {}


  getHello(): string {
    return 'Hello World!';
  }

  async analyzeStock(symbol: string) {
    const fundamentals = await this.fundamentals.getFundamentals(symbol);
    const valuation = await this.valuation.getValuationData(symbol);
    const sentiment = await this.sentiment.getSentiment(symbol);

    const result = await this.score.getFinalRating(
      fundamentals,
      valuation,
      sentiment,
    );

    return {
      stock: symbol,
      ...result
    }
  }

}
