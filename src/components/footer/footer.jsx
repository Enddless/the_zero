import './footer.css';
import logo from "../../assets/Logo.png"
import telegramm from "./telegramm.svg"
import watsapp from "./watsapp.svg"
import google from "./google.svg"


function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="line-one container">
          <img src={logo} className="logo" alt='logo'></img>
          <div className="line-one__contact">
            <h5 className="contact__title heading4">Contacts</h5>
            <p className="contact__widgetstext widgetstext"><a href='./' > +00 000 000 000 </a></p>
            <p className="contact__widgetstext widgetstext"><a href='./' > Zero City, 000000 </a></p>
          </div>
          <div className="line-one__sociallink">
            <h5 className="contact__title heading4">Social link</h5>
            <p className="contact__widgetstext widgetstext">
              <img src={telegramm} alt="telegramm" />
              <img src={watsapp} alt="watsapp" />
              <img src={google} alt="google" />
            </p>
          </div>
        </div>
      </div>
      <div className="line-two body"> <p>© 2023 All rights Reserved</p> </div>
    </section>
  );
}

export default Footer;
