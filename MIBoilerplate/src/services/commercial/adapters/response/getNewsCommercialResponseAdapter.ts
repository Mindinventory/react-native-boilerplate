import { NewsResult } from '../../../models';
import { NewDataResponse, NewsResponseDTO } from '../../dtos/NewsResponseDTO';

export class getNewsCommercialResponseAdapter {
  constructor() {}

  service(dto: NewsResponseDTO): NewsResult[] {
    return dto.Data.map((item: NewDataResponse) => {
      return {
        body: item.body,
        categories: item.categories,
        id: item.id,
        imageUrl: item.imageurl,
        published_on: item.published_on,
        source: item.source,
        tags: item.tags,
        title: item.title,
      };
    });
  }
}
