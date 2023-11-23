import { createContext, useContext, useState } from 'react';

import { RepositoriesContextType, RepositoriesProviderProps } from './Repositories.interface';
import useGetRepositoriesData from './useGetRepositoriesData.hook';

const RepositoriesContext = createContext<RepositoriesContextType | undefined>(undefined);

const RepositoriesProvider = ({ children, initialPage = 0, initialSearchTerm = '' }: RepositoriesProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const { repositories, totalNumberRepositories, isLoading, error } = useGetRepositoriesData(searchTerm, currentPage);

  return (
    <RepositoriesContext.Provider
      value={{ repositories, searchTerm, currentPage, totalNumberRepositories, isLoading, error, setCurrentPage, setSearchTerm }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositoriesContext = () => {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error('useRepositoriesContext needs to be inside Repositories component');
  }

  return context;
};

export default RepositoriesProvider;
