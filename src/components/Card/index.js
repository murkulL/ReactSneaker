import styles from './Card.module.scss';

console.log(styles);

function Card (props) {
  return (
  <>
  <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/images/svg/heart-unliked.svg" alt="heartUnliked icon" />
      </div>

      <img width={133} height={112} src={props.imageUrl} alt="product img" />
      <h5>{props.title}</h5>
      <div className="d-flex align-center justify-between">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} $</b>
        </div>
        <button className="button" onClick={props.onClick}><img width={30} height={30} src="/images/svg/plus.svg" alt="plus button" /></button>
      </div>
    </div></>
  );
}

export default Card;
