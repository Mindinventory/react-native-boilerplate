export interface Source {
  id?: null | string | number;
  name: string;
}

export interface NewsResult {
  body: string;
  categories: string;
  id: string;
  imageurl: string;
  published_on: number;
  source: string;
  tags: string;
  title: string;
}
