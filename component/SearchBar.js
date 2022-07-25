import { useRouter } from 'next/router';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ title }) => {
  const router = useRouter();

  return (
    <div className={styles.searchbar__container}>
      <h1>
        {' '}
        {title}
      </h1>
      <button className="btn-primary" onClick={() => router.push('/dashboard/create-post')} type="button"> Create Post </button>
    </div>
  );
};

export default SearchBar;
