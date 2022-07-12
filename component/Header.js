import React from "react";
import Link from "next/link";
import styles from '../styles/Header.module.css';

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/about"
    },
    {
        name: "Services",
        path: "/services"
    }
]


const displayNav =() =>{
    console.log('hey')
}
const Header = () => {

    
    return (
        <header className={styles.nav__container}>
            <img src="./menu.svg" onClick={displayNav} className={styles.nav__logo}/>
            <nav className={styles.nav__bar}>
                <ul>
                {
                    navLinks.map((link, index) => {
                        return (
                            <Link href={link.path}>
                                <li key={index} className={styles.nav__link}> {link.name}  </li>
                            </Link>
                        )
                    })
                }
                </ul>
                <button>Get Started</button>
            </nav>
        </header>
    )
}
export default Header;