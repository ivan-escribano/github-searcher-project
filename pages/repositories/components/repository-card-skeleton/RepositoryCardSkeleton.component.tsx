import React from 'react';

import { Skeleton } from '@mui/material';

import { RepositoryCardSkeletonProps } from './RepositoryCardSkeleton.interface';

const RepositoryCardSkeleton = ({ skeletonsNumber }: RepositoryCardSkeletonProps) => {
  return (
    <>
      {Array.from(new Array(skeletonsNumber)).map((_, index) => (
        <Skeleton key={index} animation={'pulse'} variant="rounded" role="img" height={'300px'} />
      ))}
    </>
  );
};

export default RepositoryCardSkeleton;
