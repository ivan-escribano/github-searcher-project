import React from 'react';

import { Skeleton } from '@mui/material';

import { RepositoryCardSkeletonProps } from './RepositoryCardSkeleton.interface';
import styles from './RepositoryCardSkeleton.module.scss';

const RepositoryCardSkeleton = ({ skeletonsNumber }: RepositoryCardSkeletonProps) => {
  return (
    <>
      {Array.from(new Array(skeletonsNumber)).map((_, index) => (
        <Skeleton key={index} animation={'pulse'} variant="rounded" className={styles.skeleton} role="img" height={'300'} />
      ))}
    </>
  );
};

export default RepositoryCardSkeleton;
