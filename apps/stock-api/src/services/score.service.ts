import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ScoreService {
  async getFinalRating(f, v, s) {

    const fundamentalScore =
      (f.roe > 20 ? 20 : 0) +
      (f.profitGrowth > 10 ? 20 : 0) +
      (f.revenueGrowth > 10 ? 20 : 0) +
      (f.debtToEquity < 1 ? 20 : 0) +
      (f.cashFlow > 0 ? 20 : 0);

    const valuationScore =
      (v.pe < 20 ? 25 : 0) +
      (v.pb < 3 ? 25 : 0) +
      (v.peg < 1 ? 25 : 0) +
      (v.intrinsicValue > 0 ? 25 : 0);

    const sentimentScore = s.sentimentScore;

    const overall =
      (0.5 * fundamentalScore) +
      (0.3 * valuationScore) +
      (0.2 * sentimentScore);

    const rating =
      overall >= 80 ? 'BUY' :
      overall >= 60 ? 'HOLD' :
      'SELL';

    return {
      fundamentalScore,
      valuationScore,
      sentimentScore,
      overall,
      rating,
    };
  }
}
