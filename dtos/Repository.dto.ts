export interface OwnerDTO {
  login: string;
  avatar_url: string;
}

export interface RepositoryDTO {
  id: number;
  full_name: string;
  description: string | null;
  owner: OwnerDTO;
  created_at: string;
  updated_at: string;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  html_url: string;
}
