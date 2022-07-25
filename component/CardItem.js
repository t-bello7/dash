import styles from '../styles/CardItem.module.css';

const CardItem = ({ children, width }) => (
  <div className={styles.card__container} style={{ width }}>
    {children}
  </div>
);

export default CardItem;
