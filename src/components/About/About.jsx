import awardIcon from "../../assets/icons/award.svg";
import usersIcon from "../../assets/icons/users.svg";
import clockIcon from "../../assets/icons/clock.svg";

import aboutImg from "../../assets/images/about-haircut.jpg";

import "./About.css";

const features = [
  {
    icon: awardIcon,
    title: "Award Winning",
    text: "Best Barbershop 2024",
  },
  {
    icon: usersIcon,
    title: "Expert Barbers",
    text: "10+ Years Experience",
  },
  {
    icon: clockIcon,
    title: "Open 7 Days",
    text: "Flexible Scheduling",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__grid">
          {/* Left Content */}
          <div className="about__content">
            <h2 className="about__title">About Fade Masters</h2>
            <div className="about__divider"></div>

            <p className="about__text">
              Since 2015, Fade Masters Barbershop has been the premier
              destination for men's grooming. Our team combines traditional
              techniques with modern styles to deliver exceptional results every
              time.
            </p>

            <p className="about__text">
              We believe in the art of barbering and the importance of looking
              your best. Each barber brings years of expertise and passion,
              ensuring you leave feeling confident.
            </p>

            {/* Features */}
            <div className="about__features">
              {features.map((item, index) => (
                <div className="about__feature" key={index}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="about__icon"
                  />
                  <h3 className="about__feature-title">{item.title}</h3>
                  <p className="about__feature-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="about__image-wrapper">
            <img
              src={aboutImg}
              alt="Fade Masters Barbershop interior"
              className="about__image"
            />
            <div className="about__accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
