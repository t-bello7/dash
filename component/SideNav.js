import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import styles from '../styles/SideNav.module.css';
import CardItem from './CardItem';

const navLinks = [
  {
    index: uuidv4(),
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    index: uuidv4(),
    name: 'Calender',
    path: '/dashboard/calender',
  },
  {
    index: uuidv4(),
    name: 'Post',
    path: '/dashboard/post',
  },
];

const SideNav = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav__container}>
      <div className={`flow ${styles.nav__profile}`}>
        <img src="/dash-logo.svg" className={styles.nav__logo} alt="logo" />
        <img src="/img/default-profile.png" alt="profile-pic" />
        <h2> Lucas Eniola</h2>
        <span> Edit Profile</span>
      </div>

      <div className={styles.link__container}>
        <ul>
          {navLinks.map((link) => (
            <Link key={link.index} href={link.path}>
              <li className={router.pathname === link.path ? `${styles.nav__active} ${styles.nav__link}` : `${styles.nav__link}`}>{link.name}</li>
            </Link>
          ))}
        </ul>
        <button className={`btn-secondary ${styles.btn__social}`} type="button"> Add Socials </button>
      </div>

      <CardItem width="100%" style={{ margin: '1rem' }}>
        <h2> Most Viewed </h2>
        <div>
          <span>1</span>

          Adidas Sneakers Post
          35 views

          <span> post image</span>

        </div>
        <div>
          <span>2</span>

          Adidas Sneakers Post
          35 views

          <span> post image</span>

        </div>
        <div>
          <span>3</span>

          Adidas Sneakers Post
          35 views

          <span> post image</span>
        </div>
      </CardItem>

      <div className={`flex ${styles.nav__button}`}>
        <button type="button"> Help center </button>
        <button type="button" onClick={() => signOut()}> Logout </button>
      </div>

    </nav>
  );
};

export default SideNav;
