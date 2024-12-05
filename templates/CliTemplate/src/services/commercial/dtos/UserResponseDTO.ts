export interface UserResponseDTO {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: DatumDTO[];
  support: SupportDTO;
}

export interface DatumDTO {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SupportDTO {
  url: string;
  text: string;
}

export interface LoginResponseDTO {
  token: string;
}
