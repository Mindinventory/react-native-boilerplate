export interface ListUserReq {
  page: number;
}

export interface ApiUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  support: Support;
}

export interface Datum {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UserResponse {
  first_name: string;
  id: number;
  last_name: string;
}
