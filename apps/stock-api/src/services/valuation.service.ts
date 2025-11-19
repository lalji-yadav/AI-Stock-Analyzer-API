import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ValuationService {
  async getValuationData(symbol: string) {
    const data = await axios.get(
      `https://financialmodelingprep.com/api/v3/key-metrics/${symbol}?apikey=KEY`
    );

    const info = data.data[0];

    return {
      pe: info.peRatio,
      pb: info.pbRatio,
      peg: info.pegRatio,
      intrinsicValue: info.intrinsicValue,
    };
  }
}
