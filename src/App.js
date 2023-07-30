/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Card from './components/Card';
// eslint-disable-next-line no-unused-vars
import Drawer from './components/Drawer';
// eslint-disable-next-line no-unused-vars
import Header from './components/Header';

import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';




// 58:40 / 3:25:04  #5: React Sneakers



function App () {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
      axios.get('https://64c2f29aeb7fd5d6ebd0731a.mockapi.io/Items').then((res) => {
        setItems(res.data);
      });
      axios.get('https://64c2f29aeb7fd5d6ebd0731a.mockapi.io/cart').then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://64c2f29aeb7fd5d6ebd0731a.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj])
    }

    const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value)
    }
  
    return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} closeDrawer={() => setCartOpened(false)} />}
      <Header openDrawer={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className="d-flex mb-40 align-center justify-between">
          <h1>{searchValue ? `Search by : "${searchValue}"` : 'All Sneakers'}</h1>
          <div className="search-block d-flex">
            <img src="./images/svg/search.svg" alt="search img"/>
            {searchValue && <img onClick={() => setSearchValue('')} className="removeBtn removeSearchBtm cu-p" src="./images/svg/remove.svg" alt="Search clear" />}            
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search..."/>
          </div>
          </div>
          <div className="d-flex flex-wrap">
            {items
              .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
              key={item.index}
              title={item.name}
              price={item.price}
              imageUrl={item.images}
              addFavorite={() => console.log('добавили в закладки')}
              clickOnPlus={(obj) =>  onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
    </div>
  );
}

export default App;
