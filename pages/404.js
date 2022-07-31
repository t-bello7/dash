import Link from 'next/link';
import RootLayout from '../component/RootLayout';
import styles from '../styles/NotFound.module.css';

const NotFound = () => (
  <RootLayout>
    <div className={styles.container}>
      <h1 className={styles.header}>Page Not Found</h1>
      <p>
        You have found a page that does not exist on Dash.
        That can happen when you follow a link to something
        that has since been deleted. Or the link was incorrect to begin with.
      </p>
      <li><Link href="/">Go to the home page</Link></li>
    </div>
  </RootLayout>
);

export default NotFound;
