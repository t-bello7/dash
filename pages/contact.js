import React from 'react';
import RootLayout from '../component/RootLayout';
import ContactForm from '../component/ContactForm';
import styles from '../styles/Contact.module.css';

const Contact = () => (
  <>
    <RootLayout>
      <main className={` flex ${styles.container}`}>
        <div className={styles.contact__info}>
          <span>
            <h3>Have a project for us ?</h3>
            <p> Reach out to us. We can help make life easier.</p>
          </span>
          <span>
            <p>Address</p>
            <h3>Lagos Nigeria</h3>
          </span>
          <span>
            <p>Email</p>
            <h3>bello4aus@gmail.com</h3>
          </span>
          <span>
            <p>Phone</p>
            <h3>+234817163568</h3>
          </span>
        </div>
        <ContactForm />
      </main>
    </RootLayout>
  </>
);

export default Contact;
