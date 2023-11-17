import React from 'react';

import { REPOSITORIES_PER_PAGE } from '@/api/repositories/repositories.config';
import GenericPagination from '@/components/genericPagination/GenericPagination.component';
import { useRepositories } from '../../Repositories.context';
import RepositoryCardSkeleton from '../repository-card-skeleton/RepositoryCardSkeleton.component';
import RepositoryCard from '../repository-card/RepositoryCard.component';
import styles from './RepositoryList.module.scss';

const RepositoryList = () => {
  const { repositories, isLoading, totalNumberRepositories, setCurrentPage } = useRepositories();

  const handlePaginationPage = (page: number) => {
    setCurrentPage(page);
  };

  const numberPages = totalNumberRepositories ? Math.ceil(totalNumberRepositories / REPOSITORIES_PER_PAGE) : 0;

  return (
    <section className={styles.repositoryList}>
      {isLoading ? (
        <RepositoryCardSkeleton skeletonsNumber={6} />
      ) : (
        repositories?.map((repository) => <RepositoryCard key={repository.id} repository={repository} />)
      )}

      <GenericPagination numberPages={numberPages} onChange={handlePaginationPage} />
    </section>
  );
};

export default RepositoryList;
