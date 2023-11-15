import React from 'react';

import { useRepositories } from '../../Repositories.context';
import RepositoryCardSkeleton from '../repository-card-skeleton/RepositoryCardSkeleton.component';
import RepositoryCard from '../repository-card/RepositoryCard.component';
import styles from './RepositoryList.module.scss';

const RepositoryList = () => {
  const { repositories, isLoading } = useRepositories();

  return (
    <section className={styles.repositoryList}>
      {isLoading ? (
        <RepositoryCardSkeleton skeletonsNumber={6} />
      ) : (
        repositories?.map((repository) => <RepositoryCard key={repository.id} repository={repository} />)
      )}
    </section>
  );
};

export default RepositoryList;
