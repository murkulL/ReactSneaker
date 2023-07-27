function Drawer () {
  return (
    <>
     <div className="overlay" style={{ display: 'none' }}>
        <div className="drawer">
          <h2 className="Shopping mb-20">Shopping cart <img className="removeBtn cu-p" src="./images/svg/remove.svg" alt="remove btn" /></h2>

          <div className="items">
          <div className="cartItem d-flex align-center justify-between mb-20">
            <div className="cartItemImg mr-10" style={{ backgroundImage: 'url(/images/img-1.jpg)' }}></div>
              <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>1 299 $</b>
              </div>
                <img className="removeBtn" src="./images/svg/remove.svg" alt="remove btn" />
              </div>
          </div>

          <div className="cartTotalBlock">
          <ul >
            <li>
              <span>Total:</span>
              <div></div>
              <b> 1 2000 $</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>25 $</b>
            </li>
          </ul>
          <button className="greenButton">Сheckout<img src="/images/svg/arrow.svg" alt="arrow of checkout"></img></button>
          </div>
        </div>
      </div>
      </>
  );
}

export default Drawer;
