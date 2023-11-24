import React from 'react';

import { useRouter } from 'next/router';

import { REPOSITORIES_PER_PAGE } from '@/api/repositories/repositories.config';
import GenericAnimation from '@/components/generic-animation/GenericAnimation.component';
import GenericPagination from '@/components/generic-pagination/GenericPagination.component';
import { updateQueryParameter } from '@/utils/updateQueryParams.util';
import { useRepositoriesContext } from '../../Repositories.context';
import RepositoryCardSkeleton from '../repository-card-skeleton/RepositoryCardSkeleton.component';
import RepositoryCard from '../repository-card/RepositoryCard.component';
import styles from './RepositoryList.module.scss';

const RepositoryList = () => {
  const { repositories, currentPage, isLoading, totalNumberRepositories, setCurrentPage } = useRepositoriesContext();
  const router = useRouter();
  console.log(totalNumberRepositories);
  const numberPages = totalNumberRepositories ? Math.ceil(totalNumberRepositories / REPOSITORIES_PER_PAGE) : undefined;

  const handlePaginationPage = (page: number) => {
    setCurrentPage(page);

    updateQueryParameter(router, 'page', page.toString());
  };

  return (
    <section className={styles.repositoryList}>
      {isLoading ? (
        <RepositoryCardSkeleton skeletonsNumber={6} />
      ) : (
        repositories &&
        repositories.map((repository) => (
          <GenericAnimation key={repository.id}>
            <RepositoryCard repository={repository} />
          </GenericAnimation>
        ))
      )}

      {numberPages && <GenericPagination numberPages={numberPages} onChange={handlePaginationPage} defaultPage={currentPage} />}
    </section>
  );
};

export default RepositoryList;
