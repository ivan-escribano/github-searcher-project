import React, { ChangeEvent } from 'react';

import Pagination from '@mui/material/Pagination';

import { MAX_PAGES } from './GenericPagination.config';
import { GenericPaginationProps } from './GenericPagination.interface';

const GenericPagination = ({ numberPages, onChange, defaultPage }: GenericPaginationProps) => {
  const pageCount = numberPages > MAX_PAGES ? MAX_PAGES : numberPages;

  const handlePaginationChange = (event: ChangeEvent<unknown>, page: number) => {
    onChange(page);
  };

  return <Pagination count={pageCount} color="primary" onChange={handlePaginationChange} defaultPage={defaultPage} data-cy="pagination" />;
};

export default GenericPagination;
