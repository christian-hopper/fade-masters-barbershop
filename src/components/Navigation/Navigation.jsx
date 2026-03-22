import { useState, useEffect } from "react";
import scissors from "../../assets/images/scissors.svg";
import "./Navigation.css";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navigation ${scrolled ? "navigation--scrolled" : ""}`}>
      <div className="navigation__container">
        <div className="navigation__logo">
          <img src={scissors} alt="Scissors" className="navigation__icon" />
          <span className="navigation__title">Fade Masters Barbershop</span>
        </div>

        <nav className="navigation__links">
          {["home", "services", "gallery", "about", "contact"].map(
            (section) => (
              <button
                key={section}
                className="navigation__link"
                onClick={() => handleScrollTo(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ),
          )}
        </nav>

        <button
          className="navigation__cta"
          onClick={() => handleScrollTo("contact")}
        >
          Book Appointment
        </button>
      </div>
    </header>
  );
}

export default Navigation;
