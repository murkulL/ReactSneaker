/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Card from './components/Card';
// eslint-disable-next-line no-unused-vars
import Drawer from './components/Drawer';
// eslint-disable-next-line no-unused-vars
import Header from './components/Header';

// const arr = [

// ];

function App () {
  const [items, setItems] = React.useState([]);
  const [cartItems, setcartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://64c2f29aeb7fd5d6ebd0731a.mockapi.io/Items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = () => {
    setcartItems();
  };
  onAddToCart();

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} closeDrawer={() => setCartOpened(false)} /> : null}
      <Header
        openDrawer={() => setCartOpened(true)}
      />
        <div className="content p-40">
          <div className="d-flex mb-40 align-center justify-between">
          <h1>All sneackers</h1>
          <div className="search-block d-flex">
            <img src="./images/svg/search.svg" alt="search img"/>
            <input type="text" placeholder="Search..."/>
          </div>
          </div>
          <div className="d-flex flex-wrap">
            {items.map((obj) => (
              <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.images}
              addFavorite={() => console.log('добавили в закладки')}
              clickOnPlus={(obj) => console.log(obj)}
              />
            ))}
          </div>
        </div>
    </div>
  );
}

export default App;
