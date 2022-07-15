import React from 'react';
import styles from '../styles/CardItem.module.css'

const CardItem = () => (
  <div className={styles.card__container}>
    <img src="./img/analyze.svg"/>
    <h3>Track Your social media activities</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lobortis enim sapien, risus, sed. Feugiat nulla.
    </p>
  </div>
);

export default CardItem;
