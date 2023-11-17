import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';

import { RepositoriesApi } from '@/api/repositories/repositories.api';
import { RepositoryDTO } from '@/dtos/Repository.dto';
import { RepositoriesContextType, RepositoriesProviderProps } from './Repositories.interface';

const RepositoriesContext = createContext<RepositoriesContextType | undefined>(undefined);

const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data: totalNumberRepositories } = useQuery<number>({
    queryKey: ['repositories', searchTerm],
    queryFn: () => RepositoriesApi.getTotalRepositoriesCount(searchTerm),
  });

  const {
    data: repositories,
    isLoading,
    error,
  } = useQuery<RepositoryDTO[]>({
    queryKey: ['repositories', searchTerm, currentPage],
    queryFn: () => RepositoriesApi.searchRepositories(searchTerm, currentPage),
  });

  return (
    <RepositoriesContext.Provider value={{ repositories, setSearchTerm, isLoading, error, totalNumberRepositories, setCurrentPage }}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositories = () => {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error('useRepositories needs to be inside Repositories component');
  }

  return context;
};

export default RepositoriesProvider;
