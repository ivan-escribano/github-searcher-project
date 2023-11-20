import Image from 'next/image';

import logo from '@/assets/logo-github-searcher.png';
import RepositoryList from './components/repository-list/RepositoryList.component';
import RepositorySearchBar from './components/repository-search-bar/RepositorySearchBar.component';
import RepositoriesProvider from './Repositories.context';
import styles from './Repositories.module.scss';

function Repositories() {
  return (
    <RepositoriesProvider>
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

export default Repositories;
