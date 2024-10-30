export interface NewsResponseDTO {
  Type: number;
  Message: string;
  Promoted?: null[] | null;
  Data: NewDataResponse[];
  RateLimit: Object;
  HasWarning: boolean;
}

export interface NewDataResponse {
  id: string;
  guid?: string;
  published_on: number;
  imageurl: string;
  title: string;
  url?: string;
  body: string;
  tags: string;
  lang?: string;
  upvotes?: string;
  downvotes?: string;
  categories: string;
  source_info?: SourceInfo;
  source: string;
}
export interface SourceInfo {
  name: string;
  img: string;
  lang: string;
}
