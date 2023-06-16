import styles from "./cards.module.css";
import item1 from "./../../../../img/items/item1.png";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <img className={styles.card_img} src={item1} alt="" />
      <div className={styles.card_body}>
        <div className={styles.card_text}>
          <div className={styles.card_title}>Louis Vuitton</div>
          <div className={styles.card_muted}>Capucines MM</div>
        </div>
        <div className={styles.card_icon}></div>
      </div>
    </div>
    
  );
};

export default Cards;
