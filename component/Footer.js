import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import NewsLetter from './NewsLetter';

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

const Footer = () => (
  <footer className={styles.footer__container}>
    <NewsLetter />
    <div className={styles.grid}>
      <div>
        <h3 className={styles.footer__headers}> Social Media </h3>
        <p> Connect with us on our Socials </p>
        <span>
          <Link href="https://facebook.com">
            <img src="./img/facebook.png" alt="facebook-logo" />
          </Link>
          <Link href="https://facebook.com">
            <img src="./img/instagram.png" alt="instagram-logo" />
          </Link>
          <Link href="https://facebook.com">
            <img src="./img/twitter.png" alt="twitter-logo" />
          </Link>
        </span>
      </div>
      <div>
        <h3  className={styles.footer__headers} >Contact Us</h3>
        <span style={{display:'block'}}> bello@email.tbello.tech </span>
        <span> +344-45-4444</span>
      </div>
      <div className={styles.link__item}>
        <h3 className={styles.footer__headers} > Link</h3>
        {
          navLinks.map((navlink) => (
            <Link key={navlink.index} href={navlink.path}>
              <li>
                {navlink.name}
              </li>
            </Link>

          ))
}
      </div>

    </div>
    <div>
      {' '}
      Powered by
      <Link href="https://planetscale.com/"> PlanetScale</Link>
      {' '}
      and
      <Link href="https://hashnode.com"> Hashnode </Link>
    </div>
  </footer>
);

export default Footer;
