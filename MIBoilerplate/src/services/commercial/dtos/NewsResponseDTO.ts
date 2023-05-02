export interface NewsResponseDTO<T> {
  status: number;
  totalResults: number;
  articles: T;
}
