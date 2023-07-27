// eslint-disable-next-line no-unused-vars
import Card from './components/Card';
// eslint-disable-next-line no-unused-vars
import Drawer from './components/Drawer';
// eslint-disable-next-line no-unused-vars
import Header from './components/Header';

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
            <Card />
          </div>
        </div>
    </div>
  );
}

export default App;
