import React from 'react';

import { useRouter } from 'next/router';

import GenericInput from '@/components/generic-input/GenericInput.component';
import { updateQueryParameter } from '@/utils/updateQueryParams.util';
import { useRepositoriesContext } from '../../Repositories.context';

const RepositorySearchBar = () => {
  const { setSearchTerm, searchTerm, setCurrentPage } = useRepositoriesContext();
  const router = useRouter();

  const handleSearchChange = (valueToSearch: string) => {
    setSearchTerm(valueToSearch);
    setCurrentPage(1);

    updateQueryParameter(router, 'name', valueToSearch);
    updateQueryParameter(router, 'page', '1');
  };

  return <GenericInput label={'Search Github repository'} defaultValue={searchTerm} onChange={handleSearchChange} />;
};

export default RepositorySearchBar;
