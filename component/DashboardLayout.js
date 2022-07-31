import React from 'react';
import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react';
import SideNav from './SideNav';
import styles from '../styles/DashboardLayout.module.css';
import SearchBar from './SearchBar';
// import AccessDenied from './AccessDenied';

const DashboardLayout = ({ children }) => {
  // const [content, setContent] = useState(content);

  // const { data: session } = useSession();
  const router = useRouter();
  let title;
  // console.log(session);

  // useEffect(() => {
  //   const response = fetch('/api/dasho');
  // });
  if (router.pathname === '/dashboard') {
    title = 'Dashboard';
  } else if (router.pathname === '/dashboard/post') {
    title = 'Post';
  } else if (router.pathname === '/dashboard/calender') {
    title = 'Calender';
  } else {
    title = 'Create Post';
  }

  // if (session) {
  return (
    <div className={styles.dashboard__container}>
      <SideNav />
      <div>
        {/* <h1>{session.user.email}</h1> */}
        <SearchBar title={title} />
        {children}
      </div>
    </div>
  );
  // }
  // else{
  // return (
  //   <AccessDenied />
  // );
  // }
};

export default DashboardLayout;
