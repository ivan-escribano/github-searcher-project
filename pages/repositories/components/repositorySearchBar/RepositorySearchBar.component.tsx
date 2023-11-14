import React from 'react';

import GenericInput from '@/components/generic-input/GenericInput.component';
import { DEFAULT_GITHUB_REPOSITORY } from './RepositorySearchBar.config';

const RepositorySearchBar = () => {
  return (
    <div>
      <GenericInput label={'Search Github repository'} defaultValue={DEFAULT_GITHUB_REPOSITORY} value={''} setValue={() => ''} />
    </div>
  );
};

export default RepositorySearchBar;
