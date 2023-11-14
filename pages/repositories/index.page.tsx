import RepositoryList from './components/repositoryList/RepositoryList.component';
import RepositorySearchBar from './components/repositorySearchBar/RepositorySearchBar.component';
import styles from './Repositories.module.scss';

function Repositories() {
  return (
    <section className={styles.repositories}>
      <RepositorySearchBar />

      <RepositoryList />
    </section>
  );
}

export default Repositories;
