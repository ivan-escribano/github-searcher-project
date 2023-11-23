import api from '../shared/apiConfig';

const MOCK_TOTAL_COUNT = 100;

const MOCK_REPOSITORIES = [
  { id: 1, name: 'Repo1', description: 'Description 1' },
  { id: 2, name: 'Repo2', description: 'Description 2' },
];

jest.mock('../shared/apiConfig', () => ({
  get: jest.fn(),
}));

const mockGetResolvedValue = (response: object) => {
  (api.get as jest.Mock).mockResolvedValue(response);
};

const mockGetTotalRepositoriesCount = () => {
  const mockResponse = { data: { total_count: MOCK_TOTAL_COUNT } };

  mockGetResolvedValue(mockResponse);
};

const mockSearchRepositories = () => {
  const mockResponse = { data: { items: MOCK_REPOSITORIES } };

  mockGetResolvedValue(mockResponse);
};

export { mockGetTotalRepositoriesCount, mockSearchRepositories, MOCK_TOTAL_COUNT, MOCK_REPOSITORIES };
