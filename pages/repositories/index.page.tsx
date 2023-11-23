import { GetServerSideProps } from 'next';
import Image from 'next/image';

import logo from '@/assets/logo-github-searcher.png';
import RepositoryList from './components/repository-list/RepositoryList.component';
import RepositorySearchBar from './components/repository-search-bar/RepositorySearchBar.component';
import RepositoriesProvider from './Repositories.context';
import { RepositoriesProps } from './Repositories.interface';
import styles from './Repositories.module.scss';

function Repositories({ initialPage, initialSearchTerm }: RepositoriesProps) {
  return (
    <RepositoriesProvider initialPage={initialPage} initialSearchTerm={initialSearchTerm}>
      <section className={styles.repositories}>
        <div className={styles.repositories__header}>
          <Image src={logo} width={100} height={100} alt="Logo GitHub Searcher" />
          <RepositorySearchBar />
        </div>

        <RepositoryList />
      </section>
    </RepositoriesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const initialPage = query.page ? parseInt(query.page as string, 10) : 0;
  const initialSearchTerm = query.name || '';

  return {
    props: {
      initialPage,
      initialSearchTerm,
    },
  };
};

export default Repositories;
