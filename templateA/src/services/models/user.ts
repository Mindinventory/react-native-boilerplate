export interface ListUserReq {
  page: number;
  per_page: number;
}

export interface UserResult {
  firstName: string;
  id: number;
  lastName: string;
}
