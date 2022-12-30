import React from 'react';
import RootLayout from '../component/RootLayout';
import styles from '../styles/About.module.css';

const About = () => (
  <RootLayout>
    <main className={styles.about__container}>
      <div className={styles.about}>
        <h1> About us </h1>
        <p>Connecting social media marketers to more online customer reach.</p>
      </div>
      <div className={`${styles.goal} flex`}>
        <div>
          <p>
            Our top priority is to easilymake our users  manage
            their soocial accounts and effective
            reach all their audience swiftly.
          </p>
          <ul>
            <li>
              {' '}
              <img src="/check.png" alt="check" />
              {' '}
              Connect Multiple Socials
              {' '}
            </li>
            <li>
              {' '}
              <img src="/check.png" alt="check" />
              {' '}
              Schedule post and Updates
              {' '}
            </li>
            <li>
              {' '}
              <img src="/check.png" alt="check" />
              {' '}
              See your post activity
              {' '}
            </li>
            <li>
              {' '}
              <img src="/check.png" alt="check" />
              {' '}
              View your post engagements
              {' '}
            </li>
          </ul>
        </div>
        <div className={styles.goal__image}>
          <img src="/img/Saly-44.png" alt="goal" />
        </div>
      </div>
    </main>
  </RootLayout>
);

export default About;
