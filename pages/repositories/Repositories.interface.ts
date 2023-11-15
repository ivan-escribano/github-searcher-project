import { Dispatch, ReactNode, SetStateAction } from 'react';

import { RepositoryDTO } from '@/dtos/Repository.dto';

export interface RepositoriesProviderProps {
  children: ReactNode | ReactNode[];
}

export interface RepositoriesContextType {
  repositories: RepositoryDTO[] | undefined;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  error: Error | null;
  isLoading: boolean;
}
