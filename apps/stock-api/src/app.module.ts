import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundamentalService } from './services/fundamental.service';
import { ScoreService } from './services/score.service';
import { SentimentService } from './services/sentiment.service';
import { ValuationService } from './services/valuation.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,FundamentalService,ScoreService,SentimentService,ValuationService],
})
export class AppModule {}
