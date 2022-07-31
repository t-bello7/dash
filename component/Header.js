import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Header.module.css';

const navLinks = [
  {
    index: uuidv4(),
    name: 'Home',
    path: '/',
  },
  {
    index: uuidv4(),
    name: 'About Us',
    path: '/about',
  },
  {
    index: uuidv4(),
    name: 'Contact Us',
    path: '/contact',
  },
];

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const handleToggle = () => {
    setNavBarOpen((prev) => !prev);
  };

  return (
    <header className={styles.nav__container}>
      <a href="/"><img src="./dash-logo.svg" className={styles.nav__logo} alt="logo" /></a>
      <button onClick={handleToggle} type="button" className={styles.nav__toggle}>
        <img src={navBarOpen ? './close.svg' : './menu.svg'} className={styles.nav__menu} alt="menu-btn" />
        {' '}
      </button>
      <nav className={`${styles.nav__bar} ${navBarOpen ? styles.show : ''}`}>
        <ul>
          {
        navLinks.map((link) => (
          <Link key={link.index} href={link.path}>

            <li className={styles.nav__link}>
              {' '}
              {link.name}
              {' '}
            </li>
          </Link>
        ))
        }
        </ul>
        <button type="button" className="btn-primary" onClick={() => signIn('email', { callbackUrl: '/dashboard' })}>Get Started</button>
      </nav>
    </header>
  );
};
export default Header;
