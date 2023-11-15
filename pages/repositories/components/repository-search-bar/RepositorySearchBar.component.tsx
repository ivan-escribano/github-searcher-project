import React from 'react';

import GenericInput from '@/components/generic-input/GenericInput.component';
import { useRepositories } from '../../Repositories.context';
import { DEFAULT_GITHUB_REPOSITORY } from './RepositorySearchBar.config';

const RepositorySearchBar = () => {
  const { setSearchTerm } = useRepositories();

  const handleSearchChange = (valueToSearch: string) => {
    setSearchTerm(valueToSearch);
  };

  return <GenericInput label={'Search Github repository'} defaultValue={DEFAULT_GITHUB_REPOSITORY} onChange={handleSearchChange} />;
};

export default RepositorySearchBar;
