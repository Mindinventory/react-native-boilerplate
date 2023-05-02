import { NewsResult } from '../../../models';
import { NewsResponseDTO } from '../../dtos/NewsResponseDTO';

export class getNewsListResponseAdapter {
  constructor() {}

  service(dto: NewsResponseDTO<NewsResult[]>): NewsResult[] {
    return dto.articles.map(item => {
      return {
        author: item.author,
        description: item.description,
        publishedAt: item.publishedAt,
        title: item.title,
        urlToImage: item.urlToImage,
      };
    });
  }
}
