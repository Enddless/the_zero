import './header.css';
import logo from "../../assets/Logo.png"
import Burger from '../mini-components/burger/burger';
import { useState } from 'react'


function Header() {
  const [isburgervisible, setburgervisible] = useState(false)
  const showBurger = () => {
    setburgervisible(!isburgervisible)
  }
  return (
    <section className="container header">
      <img src={logo} className="logo" alt='logo'></img>
      <Burger showBurger={showBurger}/>
      <ul className="menu">
        <li className="menu__item telephone"> <a href="">+86 852 346 000</a>  </li>
        <li className="menu__item"> <a href="" className="btn btn--reserv">Reservations</a>
        </li>
      </ul>
      {isburgervisible && (
        <div className="drop-down">123</div>
      )}
      
    </section>
  );
}

export default Header;
