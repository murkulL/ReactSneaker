function Card () {
  return (
    <><div className="card">
      <div className="favorite">
        <img src="/images/svg/heart-unliked.svg" alt="heartUnliked icon" />
      </div>

      <img width={133} height={112} src="/images/img-2.jpg" alt="product img" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>1 200 $</b>
        </div>
        <button className="button"><img width={11} height={11} src="/images/svg/plus.svg" alt="plus button" /></button>
      </div>
    </div></>
  );
}

export default Card;
