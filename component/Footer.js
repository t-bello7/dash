import React from 'react';
import styles from '../styles/Footer.module.css';
import NewsLetter from './NewsLetter';
import Link from 'next/link';


const navLinks = [
    {
      index: 1 - 23,
      name: 'Home',
      path: '/home',
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
  
const Footer = () => { 
    return (
        <footer className={styles.footer__container}>
            <NewsLetter/>
            <div className={styles.grid}>
                <div>
                    <h3> Social Media </h3>
                    <p> Connect with us on our Socials :</p>
                    <span>
                        <a> <img src="./img/facebook.png"/></a>
                        <a> <img src="./img/instagram.png"/></a>
                        <a> <img src="./img/twitter.png"/></a>
                    </span>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <span> williamssaas@gmail.com </span>
                    <span> +344-45-4444</span>
                </div>
                <div className={styles.link__item}>
                    <h3> Link</h3>
                    {/* {
                        navLinks.map(navlink => {
                            return( <Link  key={navlink.index} href={navlink.path} > <span> {navlink.name} </span> </Link> )})
                    } */}
                </div>
           
            </div>
        </footer>
)}



export default Footer;
