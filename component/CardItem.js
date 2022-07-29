import styles from '../styles/CardItem.module.css';

const CardItem = ({ children }) => (
  <div className={styles.card__container}>
    {children}
  </div>
);

export default CardItem;
