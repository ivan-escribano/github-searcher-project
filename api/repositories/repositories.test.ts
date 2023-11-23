import api from '../shared/apiConfig';
import { RepositoriesApi } from './repositories.api';
import { API_ENDPOINTS, REPOSITORIES_PER_PAGE } from './repositories.config';
import { MOCK_REPOSITORIES, MOCK_TOTAL_COUNT, mockGetTotalRepositoriesCount, mockSearchRepositories } from './repositories.mock';

jest.mock('../shared/apiConfig', () => ({
  get: jest.fn(),
}));

describe('Api repositories github', () => {
  test('should return the correct total count for a successful API call', async () => {
    mockGetTotalRepositoriesCount();

    const query = 'javascript';

    const totalCount = await RepositoriesApi.getTotalRepositoriesCount(query);

    const queryParams = {
      params: { q: 'in:name ' + query, per_page: 1 },
    };

    expect(api.get).toHaveBeenCalledWith(API_ENDPOINTS.SEARCH_REPOS, queryParams);

    expect(totalCount).toBe(MOCK_TOTAL_COUNT);
  });

  test('should return the data from the API response', async () => {
    mockSearchRepositories();

    const query = 'javascript';

    const page = 1;

    const repositories = await RepositoriesApi.searchRepositories(query, page);

    const searchParams = {
      params: {
        page,
        q: 'in:name ' + query,
        order: 'desc',
        per_page: REPOSITORIES_PER_PAGE,
      },
    };

    expect(api.get).toHaveBeenCalledWith(API_ENDPOINTS.SEARCH_REPOS, searchParams);

    expect(repositories).toEqual(MOCK_REPOSITORIES);
  });
});
