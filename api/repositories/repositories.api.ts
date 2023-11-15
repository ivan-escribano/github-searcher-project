import { RepositoryDTO } from '@/dtos/Repository.dto';
import api from '../shared/apiConfig';
import { API_ENDPOINTS } from './repositories.config';

const searchRepositories = async (query: string): Promise<RepositoryDTO[]> => {
  const params = {
    q: 'in:name ' + query,
    order: 'desc',
  };

  const response = await api.get(API_ENDPOINTS.SEARCH_REPOS, {
    params,
  });

  return response.data.items;
};

export const RepositoriesApi = {
  searchRepositories,
};
