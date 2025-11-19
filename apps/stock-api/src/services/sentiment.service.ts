import { Injectable } from '@nestjs/common';
import axios from 'axios';
import OpenAI from 'openai';

@Injectable()
export class SentimentService {

  async getSentiment(symbol: string) {

    const news = await axios.get(
      `https://newsapi.org/v2/everything?q=${symbol}&apiKey=NEWS_KEY`
    );

    const headlines = news.data.articles.map(a => a.title).slice(0, 5);

    const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

    const sentiment = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Classify sentiment." },
        { role: "user", content: JSON.stringify(headlines) }
      ]
    });

    return {
      sentimentScore: parseInt(sentiment.choices[0].message.content),
      news: headlines,
    };
  }
}
