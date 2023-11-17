import React, { ChangeEvent } from 'react';

import Pagination from '@mui/material/Pagination';

import { GenericPaginationProps } from './GenericPagination.interface';

const GenericPagination = ({ numberPages, onChange }: GenericPaginationProps) => {
  const handlePaginationChange = (event: ChangeEvent<unknown>, page: number) => {
    onChange(page);
  };

  return <Pagination count={numberPages} color="primary" onChange={handlePaginationChange} />;
};

export default GenericPagination;
