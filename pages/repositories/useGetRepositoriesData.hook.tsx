import { useQuery } from '@tanstack/react-query';

import { RepositoriesApi } from '@/api/repositories/repositories.api';
import { RepositoryDTO } from '@/dtos/Repository.dto';
import useDebounce from '@/hooks/useDebounce.hook';

const useGetRepositoriesData = (searchTerm: string, currentPage: number) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const { data: totalNumberRepositories } = useQuery<number>({
    queryKey: ['repositories', debouncedSearchTerm],
    queryFn: () => RepositoriesApi.getTotalRepositoriesCount(debouncedSearchTerm),
  });

  const {
    data: repositories,
    isLoading,
    error,
  } = useQuery<RepositoryDTO[]>({
    queryKey: ['repositories', debouncedSearchTerm, currentPage],
    queryFn: () => RepositoriesApi.searchRepositories(debouncedSearchTerm, currentPage),
  });

  return { repositories, totalNumberRepositories, isLoading, error };
};

export default useGetRepositoriesData;
