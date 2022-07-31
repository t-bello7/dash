import React from 'react';
import styles from '../styles/NewsLetter.module.css';

const NewsLetter = () => (
  <form className={styles.form__container}>
    <h3 className={styles.form__header}> Subscribe To Our NewsLetter</h3>
    <div className={styles.input__container}>
      <input type="text" placeholder="Enter your email" className={styles.form__input} />
      <button type="button" className={styles.form__btn}> Subscribe</button>
    </div>
  </form>
);

export default NewsLetter;
