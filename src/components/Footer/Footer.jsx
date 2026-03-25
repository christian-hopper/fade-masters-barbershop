import "./Footer.css";

import scissorsIcon from "../../assets/icons/scissors.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = ["home", "services", "gallery", "about"];
  const socials = [
    { icon: facebookIcon, link: "https://facebook.com", label: "Facebook" },
    { icon: instagramIcon, link: "https://instagram.com", label: "Instagram" },
    { icon: twitterIcon, link: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img className="footer__logo-img" src={scissorsIcon} alt="logo" />
              <span className="footer__logo-text">Fade Masters</span>
            </div>
            <p className="footer__text">
              Premium grooming services for the modern gentleman.
            </p>
          </div>

          {/* Links */}
          <div className="footer__links">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              {links.map((link) => (
                <li className="footer__list-item" key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="footer__link"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__list footer__text">
              <li className="footer__list-item">(555) 123-4567</li>
              <li className="footer__list-item">info@fademasters.com</li>
              <li className="footer__list-item">123 Main Street</li>
              <li className="footer__list-item">Downtown, NY 10001</li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer__social">
            <h3 className="footer__heading">Follow Us</h3>
            <div className="footer__socials">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__icon"
                  aria-label={item.label}
                >
                  <img src={item.icon} alt={item.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__text">
            &copy; 2026 Fade Masters Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
