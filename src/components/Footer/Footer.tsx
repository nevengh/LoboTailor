import { Link } from "react-router-dom";
import "./Footer.css";
import { useLanguage } from "../../LanguageContextType";
import ar from "../../locales/ar";
import en from "../../locales/en";

const Footer = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <div className="Footer">
      
      <div className="Footer_Bottom">
        <div className="Footer_Bottom_container">
          <div className="menu">
            
            <ul className="nav-links-footer">
                <h2>Menu</h2>
              <li>
                <Link to="/">{translations.Home}</Link>
              </li>
              <li>
                <Link to="/about">{translations.About}</Link>
              </li>
              <li>
                <Link to="/contact">{translations.contactUs}</Link>
              </li>
            </ul>
          </div>
          <div className="menu">
            <div className="nav-links-footer">
                <h2>Al Barsha Showroom</h2>
                <p>Near Mall of Emirates<br/>Dubai, United Arab Emirates</p>
                <p>Tel: <a href="tel:+97143593670">+97143593670</a></p>
                <p>Email:mangaer@lobotailor.com</p>

            </div>
          </div>
          <div className="menu">
            <div className="nav-links-footer">
                <h2>BurDubai Showroom</h2>
                <p>Meena Bazar,<br/>Next to AlFahidi Souq<br/>United Arab Emirates</p>
                <p>Tel: <a href="tel:+97143523760">+97143523760</a></p>
                <p>Email:mangaer@lobotailor.com</p>

            </div>
          </div>
          <div className="menu">
            <div className="nav-links-footer">
                <h2>Main Factory</h2>
                <p>
                    Al Serkal Warehouse<br/>AlMarabea Street no,D65<br/>Industrial Area 1,AlQuoz<br/>United Arab Emirates</p>
                <p>Tel: <a href="tel:+97142821666">+97142821666</a></p>
                <p>Email:lobotl2@eim.ae</p>

            </div>
          </div>
        </div>
      </div>
      <div className="Footer_copyWriter">
      <div className="social-icons-footer">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="copytext">© 2024 Lobo Tailors</p>
      </div>
    </div>
  );
};

export default Footer;
