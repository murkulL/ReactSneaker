/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import Card from './components/Card';
// eslint-disable-next-line no-unused-vars
import Drawer from './components/Drawer';
// eslint-disable-next-line no-unused-vars
import Header from './components/Header';

const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 11000, images: '/images/img-1.jpg' },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 15000, images: '/images/img-2.jpg' },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 12222, images: '/images/img-3.jpg' },
  { name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 12322, images: '/images/img-4.jpg' }

];

function App () {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
        <div className="content p-40">
          <div className="d-flex mb-40 align-center justify-between">
          <h1>All sneackers</h1>
          <div className="search-block d-flex">
            <img src="./images/svg/search.svg" alt="search img"/>
            <input type="text" placeholder="Search..."/>
          </div>
          </div>
          <div className="d-flex">
            {arr.map((obj) => (
              <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.images}
              onClick={() => console.log(obj)}
              />
            ))}
          </div>
        </div>
    </div>
  );
}

export default App;
