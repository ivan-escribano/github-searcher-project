import { RepositoryDTO } from '@/dtos/Repository.dto';
import api from '../shared/apiConfig';
import { API_ENDPOINTS, REPOSITORIES_PER_PAGE } from './repositories.config';

const searchRepositories = async (query: string, page: number): Promise<RepositoryDTO[]> => {
  const params = {
    page,
    q: 'in:name ' + query,
    order: 'desc',
    per_page: REPOSITORIES_PER_PAGE,
  };

  const response = await api.get(API_ENDPOINTS.SEARCH_REPOS, {
    params,
  });

  return response.data.items;
};

const getTotalRepositoriesCount = async (query: string): Promise<number> => {
  const params = {
    q: 'in:name ' + query,
    per_page: 1,
  };

  const response = await api.get(API_ENDPOINTS.SEARCH_REPOS, {
    params,
  });

  return response.data.total_count;
};

export const RepositoriesApi = {
  searchRepositories,
  getTotalRepositoriesCount,
};
