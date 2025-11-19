import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FundamentalService {
  async getFundamentals(symbol: string) {

    // Example API call
    const data = await axios.get(
      `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=KEY`
    );

    const info = data.data[0];

    return {
      roe: info.returnOnEquityTTM,
      roce: info.returnOnCapitalEmployedTTM,
      debtToEquity: info.debtToEquity,
      profitGrowth: info.profitGrowth,
      revenueGrowth: info.revenueGrowth,
      cashFlow: info.operatingCashFlowTTM,
    };
  }
}
