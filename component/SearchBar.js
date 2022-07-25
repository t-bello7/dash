import styles from '../styles/SearchBar.module.css'
import { useRouter } from 'next/router';

const SearchBar = ({title}) =>{
  const router = useRouter();

    return (
        <div className={styles.searchbar__container}>
            <h1> {title}</h1>
            <button className='btn-primary' onClick={() => router.push('/dashboard/create-post')}> Create Post </button>
        </div>
    )
}

export default SearchBar;