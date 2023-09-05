import './header.css';
import logo from "../../assets/Logo.png"
import Burger from '../mini-components/burger/burger';
import Close from "../mini-components/close/close";
import { useState } from 'react'


function Header() {
  //********** ОТКРЫТИЕ И ЗАКРЫТИЕ БУРГЕР-МЕНЮ **********
  const [isburgervisible, setburgervisible] = useState(false)
  const openBurger = () => {
    setburgervisible(!isburgervisible)
  }

  const closeBurger = () => {
    setburgervisible(!isburgervisible)
  }

  return (
    <section className="container header">
      <img src={logo} className="logo" alt='logo'></img>
      <div
        onClick={openBurger}
        className="block-burger">
          <Burger />
      </div>
      <ul className="menu">
        <li className="menu__item telephone"> <a href="">+00 000 000 000</a>  </li>
        <li className="menu__item"> <a href="" className="btn btn--reserv">Reservations</a></li>
      </ul>
      {isburgervisible && (
        <div className="drop-down">
          <ul className="menu">
            <li className="menu__item telephone"> <a href="/">Home</a>  </li>
            <li className="menu__item telephone"> <a href="/menu">Our menu</a>  </li>
            <li className="menu__item telephone"> <a href="/blog">Our blog</a>  </li>
            <li className="menu__item telephone"> <a href="#">+00 000 000 000</a>  </li>
            <li className="menu__item"> <a href="" className="btn btn--reserv">Reservations</a></li>
          </ul>
          <div onClick={closeBurger}><Close /></div>
        </div>
      )}

    </section>
  );
}

export default Header;
