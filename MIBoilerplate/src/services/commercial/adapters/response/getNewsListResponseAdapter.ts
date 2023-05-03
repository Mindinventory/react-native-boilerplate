import { NewsResult } from '../../../models';
import { NewsResponseDTO } from '../../dtos/NewsResponseDTO';

export class getNewsListResponseAdapter {
  constructor() {}

  service(dto: NewsResponseDTO): NewsResult[] {
    return dto.Data.map((item: NewsResult) => {
      return {
        body: item.body,
        categories: item.categories,
        id: item.id,
        imageurl: item.imageurl,
        published_on: item.published_on,
        source: item.source,
        tags: item.tags,
        title: item.title,
      };
    });
  }
}
