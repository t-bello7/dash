import styles from '../styles/ContactForm.module.css';
import Link from 'next/link';

const ContactForm = () => {
    return (
        <form className={`${styles.form__container} flex`} action="https://formspree.io/f/xvoypkjv" method="POST">
            <h1 className={styles.form__header}>Contact Us</h1>
            <label className={styles.form__label}for="name"> Name </label>
                <input  className={styles.form__input} name="name" placeholder="Enter Your Full Name"  maxlength="30" type="text" required />
            <label className={styles.form__label} for="email"> Email </label>            
                <input className={styles.form__input} name="email" placeholder="Enter Your Email" type="email" required/>
            <label className={styles.form__label} for= "name"> Message </label>
                <input className={styles.form__input} name="name" placeholder="Enter Your Message" cols="27" rows="10" required/>
            <button type="submit" className='btn-primary'> Submit </button>
            <span className={styles.form__footer}>
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
        </form>
    )
}

export default ContactForm