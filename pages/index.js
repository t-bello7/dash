import React from 'react';
import RootLayout from '../component/RootLayout';
import CardItem from '../component/CardItem';
import styles from '../styles/Index.module.css';
import { useSession } from 'next-auth/react';

export default function Home() {
  const {data: session} = useSession()
  return (
    <RootLayout>
      <main className='container flow'>
        <div className={styles.track}>
          <div className='flow'>
            <h1>Track Your Business Social Media Activities.</h1>
            <p>Connecting social media marketers to more online customer reach.</p>
            <div className={styles.track__buttons}>
            <button type="button" className='btn-primary'>Start Now </button>
            <button type="button" className='btn-secondary'>
              <img src="./play.svg" alt="play-icon" />
              Watch Video
            </button>
            </div>
          </div>
          <img src="./img/man.png" alt="man-img" />
        </div>
        <div className={styles.perfect}>
          <div className='flow'>
            <h2>  We Provide The Perfect Solution For Your Business</h2>
            <p> Get an adequate statistical analysis of your business social media activities. </p>
          </div>
        </div>
        <div className={styles.bg__yellow}>
          <h2>What we do</h2>
          <p>
          We manage and make social media posting swift for digital marketers
          </p>
          <div>
            <CardItem>
            <img src="./img/analyze.svg"/>
                <h3>Track Your social media activities</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lobortis enim sapien, risus, sed. Feugiat nulla.
                </p>
            </CardItem>
          </div>

        </div>
        
        <div className={styles.center }>
          <h2>Why Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus rhoncus ut purus nun. </p>
        </div>
        <div className={`${styles.center} ${styles.reason}`}>
          <div>
            <h3>Know your social media performance</h3>
            <p>Get an adequate statistical analysis of your business social media activities.</p>
          </div>
          <img src="./img/saly-22.png" alt="sally managing" />

        </div>
        <div className={`${styles.center} ${styles.reason}`}>
          <div>
            <h3>Plan and schedule your posts.</h3>
            <p>Get an adequate statistical analysis of your business social media activities.</p>
          </div>
          <img src="./img/saly-10.png" alt="sally schduleing" />
        </div>
        <div className={`${styles.center} ${styles.reason}`}>
          <div>
            <h3>Respond to Comments Swiftly</h3>
            <p>Get an adequate statistical analysis of your business social media activities.</p>
          </div>
          <img src="./img/saly-7.png" alt="sally-commenting" />

        </div>
      </main>

    </RootLayout>
  );
}
