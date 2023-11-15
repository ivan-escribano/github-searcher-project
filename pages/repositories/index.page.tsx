import RepositoryList from './components/repository-list/RepositoryList.component';
import RepositorySearchBar from './components/repository-search-bar/RepositorySearchBar.component';
import RepositoriesProvider from './Repositories.context';
import styles from './Repositories.module.scss';

function Repositories() {
  return (
    <RepositoriesProvider>
      <section className={styles.repositories}>
        <RepositorySearchBar />

        <RepositoryList />
      </section>
    </RepositoriesProvider>
  );
}

export default Repositories;
