function Header (props) {
  return (
<><header className="header d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="" src="/images/logo.png" width={40} height={40} alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Magazine best sneakers</p>
          </div>
        </div>
        <ul className="headerRight d-flex clear">
          <li>
            <img onClick={props.openDrawer} src="/images/svg/basket.svg" width={20} height={20} alt="svg header"/>
            <span>1 205 $</span>
          </li>
          <li>
            <img src="/images/svg/heart.svg" width={20} height={20} alt="svg header"/>
          </li>
          <li>
            <img src="/images/svg/union.svg" width={20} height={20} alt="svg header"/>
          </li>
        </ul>
</header></>
  );
}

export default Header;
