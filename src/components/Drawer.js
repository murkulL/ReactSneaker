function Drawer ({closeDrawer, items = []}) {
  console.log(closeDrawer)
  return (
    <>
    <div className="overlay">
        <div className="drawer">
          <h2 className="Shopping mb-20">Shopping cart<img onClick={closeDrawer} className="removeBtn cu-p" src="./images/svg/remove.svg" alt="remove btn" /></h2>
          <div className="items">
            {
              items.map((obj) => (
                <div className="cartItem d-flex align-center justify-between mb-20">
                <div className="cartItemImg mr-10" style={{ backgroundImage: `url(${obj.imageUrl})` }}></div>
                  <div className="mr-20">
                  <p className="mb-5">{`${obj.title}`}</p>
                  <b>{`${obj.price}`} $</b>
                  </div>
                    <img className="removeBtn" src="./images/svg/remove.svg" alt="remove btn" />
                  </div>
              ))
            }
          </div>

          <div className="cartTotalBlock">
          <ul >
            <li>
              <span>Total:</span>
              <div></div>
              <b> 1 200 $</b>
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
