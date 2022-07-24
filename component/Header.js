import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { signIn } from 'next-auth/react'

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
    name: 'Contact Us',
    path: '/services',
  },
];

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const handleToggle = () => {
    setNavBarOpen(prev => !prev)
  }

  const closeBarOPen = () => {
    setNavBarOpen(false);
  }

  return (
  <header className={styles.nav__container}>
    <img src="./dash-logo.svg" className={styles.nav__logo}/>
    <button onClick={handleToggle} type="button" className={styles.nav__toggle}><img src= {navBarOpen ? "./close.svg" : './menu.svg'} className={styles.nav__menu} alt="menu-btn" /> </button>
    <nav className={`${styles.nav__bar} ${navBarOpen ? styles.show : ""}`}>
      <ul>
        {
        navLinks.map((link) => (
          <Link key={link.index} href={link.path}>
            <li className={styles.nav__link} onClick={closeBarOPen}>
              {' '}
              {link.name}
              {' '}
            </li>
          </Link>
        ))
        }
      </ul>
      <div className='flex'>
        <button type="button" className='btn-secondary' onClick={() => signIn('email', {callbackUrl: 'http://localhost:3000/dashboard'})}>Log In</button>
        <button type="button" className='btn-primary'>Sign Up</button>
      </div>
    </nav>
  </header>
  )
};
export default Header;
