export const API_CLIENT = {
  API_URL: process.env.API_URL,
};

export enum API_METHODS {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export interface APIResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: any;
  token: string;
  error: string;
  support: {
    text: string;
    url: string;
  };
}
