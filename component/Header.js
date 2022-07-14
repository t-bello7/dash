import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const navLinks = [
  {
    index: 1 - 23,
    name: 'Home',
    path: '/',
  },
  {
    index: 3 - 87,
    name: 'About Us',
    path: '/about',
  },
  {
    index: 4 - 97,
    name: 'Services',
    path: '/services',
  },
];

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const handleToggle = () => {
    setNavBarOpen(prev => !prev)
  }

  return (
  <header className={styles.nav__container}>
    <button onClick={handleToggle} type="button"><img src="./menu.svg" className={styles.nav__logo} alt="menu-logo" /> </button>
    <nav className={styles.nav__bar}>
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
      <button type="button">Get Started</button>
    </nav>
  </header>
  )
};
export default Header;
