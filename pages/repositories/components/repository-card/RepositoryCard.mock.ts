import { RepositoryDTO } from '@/dtos/Repository.dto';

const mockRepository: RepositoryDTO = {
  id: 123456,
  owner: {
    login: 'ivan-escribano',
    avatar_url: 'https://example.com/avatar.png',
  },
  full_name: 'user/repo',
  description: 'This is a test repo',
  topics: ['topic1', 'topic2'],
  language: 'JavaScript',
  stargazers_count: 42,
  updated_at: '2023-01-01T12:00:00Z',
  created_at: '2023-01-01T10:00:00Z',
  html_url: 'https://github.com/ivan-escribano/github-searcher-timedi',
};

export { mockRepository };
