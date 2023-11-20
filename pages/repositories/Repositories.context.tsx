import { createContext, useContext, useState } from 'react';

import { RepositoriesContextType, RepositoriesProviderProps } from './Repositories.interface';
import useGetRepositoriesData from './useGetRepositoriesData.hook';

const RepositoriesContext = createContext<RepositoriesContextType | undefined>(undefined);

const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { repositories, totalNumberRepositories, isLoading, error } = useGetRepositoriesData(searchTerm, currentPage);

  return (
    <RepositoriesContext.Provider value={{ repositories, setSearchTerm, isLoading, error, totalNumberRepositories, setCurrentPage }}>
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
