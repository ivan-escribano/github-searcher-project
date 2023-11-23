import { Dispatch, ReactNode, SetStateAction } from 'react';

import { RepositoryDTO } from '@/dtos/Repository.dto';

export interface RepositoriesProviderProps {
  children: ReactNode | ReactNode[];
  initialPage: number;
  initialSearchTerm: string;
}

export interface RepositoriesProps {
  initialPage: number;
  initialSearchTerm: string;
}

export interface RepositoriesContextType {
  repositories: RepositoryDTO[] | undefined;
  searchTerm: string;
  currentPage: number;
  totalNumberRepositories: number | undefined;
  error: Error | null;
  isLoading: boolean;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
