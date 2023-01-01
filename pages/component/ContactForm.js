import Link from 'next/link';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => (
  <form className={`${styles.form__container} flex`} action="https://formspree.io/f/xvoypkjv" method="POST">
    <h1 className={styles.form__header}>Contact Us</h1>
    <label htmlFor="name">
      <span className={styles.form__label}> Name </span>
      <input className={styles.form__input} name="name" placeholder="Enter Your Full Name" maxLength="30" type="text" required />
    </label>
    <label htmlFor="email">
      <span className={styles.form__label}> Email </span>
      <input className={styles.form__input} name="email" placeholder="Enter Your Email" type="email" required />
    </label>
    <label htmlFor="message">
      <span className={styles.form__label}> Message  </span>
      <textarea className={styles.form__input} name="message" placeholder="Enter Your Message" cols="27" rows="10" required />
    </label>
    <button type="submit" className="btn-primary"> Submit </button>
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
);

export default ContactForm;
