import React from 'react';
import { useRouter } from 'next/router';
import SideNav from './SideNav';
import styles from '../styles/DashboardLayout.module.css';
import SearchBar from './SearchBar';

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  let title;

  if (router.pathname === '/dashboard') {
    title = 'Dashboard';
  } else if (router.pathname === '/dashboard/post') {
    title = 'Post';
  } else if (router.pathname === '/dashboard/calender') {
    title = 'Calender';
  } else {
    title = 'Create Post';
  }
  return (
    <div className={styles.dashboard__container}>
      <SideNav />
      <div>
        <SearchBar title={title} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
