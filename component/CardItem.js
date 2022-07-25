import styles from '../styles/CardItem.module.css'

const CardItem = ({children , width}) => {
  return (
  <div className={styles.card__container} style={{width: width}} >
    {children}
  </div>
)};

export default CardItem;
