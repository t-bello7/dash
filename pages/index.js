import React from 'react';
import RootLayout from '../component/RootLayout';
import CardItem from '../component/CardItem';

export default function Home() {
  return (

    <RootLayout>
      <main>
        <div>
          <div>
            <h1>Track Your Business Social Media Activities.</h1>
            <p>Connecting social media marketers to more online customer reach.</p>
            <button>Start Now </button>
            <button> <img src="./play.svg"/>Watch Video</button>
          </div>
          <img src="./img/man.png"/>
        </div>
        <div>
          <h2>  We Provide The Perfect Solution For Your Business</h2>
          <p> Get an adequate statistical analysis of your business social media activities. </p>
        </div>
        <div>
          <h2>What we do</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus rhoncus ut purus nunc libero, purus, turpis. Vel purus porttitor fusce ipsum lorem.    
        </div>
        <div>
          <CardItem/>
        </div>
        <div>
          <h2>Why Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus rhoncus ut purus nun. </p>
        </div>
        <div>
          <div>
            <h3>Know your social media performance</h3>
            <p>Get an adequate statistical analysis of your business social media activities.</p>
          </div>
          <img src="./img/saly-22.png"/>

        </div>
        <div>
          <div>
            <h3>Plan and schedule your posts.</h3>
            <p>Get an adequate statistical analysis of your business social media activities.</p>
          </div>
          <img src="./img/saly-10.png"/>
        </div>
        <div>
          <div>
            <h3>Respond to Comments Swiftly</h3>
            <p>Get an adequate statistical analysis of your business social media activities.</p>
          </div>
          <img src="./img/saly-7.png"/>

        </div>
      </main>

    </RootLayout>
  );
}
