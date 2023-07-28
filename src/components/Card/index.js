import React from 'react';
import styles from './Card.module.scss';

function Card ({ title, imageUrl, price, clickOnPlus, addFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handelPlus = () => {
    clickOnPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  React.useEffect(() => {
   
  }, [isAdded]);
  return (
  <>
  <div className={styles.card}>
      <div className={styles.favorite} onClick={ addFavorite}>
        <img src="/images/svg/heart-unliked.svg" alt="heartUnliked icon" />
      </div>

      <img width={133} height={112} src={ imageUrl } alt="product img" />
      <h5>{title}</h5>
      <div className="d-flex align-center justify-between">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{ price} $</b>
        </div>
          <img
          className={styles.plus}
          onClick={handelPlus}
          src={isAdded ? '/images/svg/chekit.svg' : '/images/svg/plus.svg' }
          alt="plus button" />
      </div>
    </div></>
  );
}

export default Card;
