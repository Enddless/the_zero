import './header.css';
import logo from "../../assets/Logo.png"
import Burger from '../mini-components/burger/burger';


function Header() {
  return (
    <section className="container header">
      <img src={logo} className="logo" alt='logo'></img>
      <Burger />
      <ul className="menu">
        <li className="menu__item telephone"> <a href="">+86 852 346 000</a>  </li>
        <li className="menu__item"> <a href="" className="btn btn--reserv">Reservations</a>
        </li>
      </ul>
    </section>
  );
}

export default Header;
