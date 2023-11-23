import React from 'react';

import { useRouter } from 'next/router';

import GenericInput from '@/components/generic-input/GenericInput.component';
import { updateQueryParameter } from '@/utils/updateQueryParams.util';
import { useRepositoriesContext } from '../../Repositories.context';

const RepositorySearchBar = () => {
  const { setSearchTerm, searchTerm } = useRepositoriesContext();
  const router = useRouter();

  const handleSearchChange = (valueToSearch: string) => {
    setSearchTerm(valueToSearch);

    updateQueryParameter(router, 'name', valueToSearch);
  };

  return <GenericInput label={'Search Github repository'} defaultValue={searchTerm} onChange={handleSearchChange} />;
};

export default RepositorySearchBar;
