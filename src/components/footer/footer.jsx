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
            <p className="contact__widgetstext widgetstext"><a href='./' > +86 852 346 000 </a></p>
            <p className="contact__widgetstext widgetstext"><a href='./' > 1959 Sepulveda Blvd.
              Culver City, CA, 90230 </a></p>
          </div>
          <div className="line-one__sociallink">
            <h5 className="contact__title heading4">Social link</h5>
            <p className="contact__widgetstext widgetstext">
              <img src={telegramm} alt="telegramm" />
              <img src={watsapp} alt="telegramm" />
              <img src={google} alt="telegramm" />
            </p>
          </div>
        </div>
      </div>
      <div className="line-two body"> <p>© 2020 Zero Inc. All rights Reserved</p> </div>
    </section>
  );
}

export default Footer;
