import haircutImg from "../../assets/images/haircut.jpg";
import beardImg from "../../assets/images/beard-trim.jpg";
import shaveImg from "../../assets/images/razor-shave.jpg";
import kidsImg from "../../assets/images/kids-haircut.jpg";
import Scissors from "../../assets/icons/scissors.svg";
import Wind from "../../assets/icons/wind.svg";
import Sparkles from "../../assets/icons/sparkles.svg";
import Baby from "../../assets/icons/baby.svg";
import "./Services.css";

const services = [
  {
    icon: Scissors,
    title: "Haircuts",
    description:
      "Expert cuts tailored to your style. From classic to contemporary.",
    price: "$35",
    image: haircutImg,
  },
  {
    icon: Wind,
    title: "Beard Trim",
    description: "Precision trimming and shaping for the perfect beard.",
    price: "$25",
    image: beardImg,
  },
  {
    icon: Sparkles,
    title: "Razor Shave",
    description: "Traditional hot towel shave with premium products.",
    price: "$40",
    image: shaveImg,
  },
  {
    icon: Baby,
    title: "Kids Haircuts",
    description: "Gentle, fun haircuts for children 12 and under.",
    price: "$25",
    image: kidsImg,
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Header */}
        <div className="services__header">
          <h2 className="services__title">Our Services</h2>
          <div className="services__divider"></div>
        </div>

        {/* Cards */}
        <div className="services__grid">
          {services.map((service, index) => {
            return (
              <div className="services__card" key={index}>
                <div className="services__image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services__image"
                  />
                </div>

                <div className="services__content">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="services__icon"
                  />

                  <h3 className="services__card-title">{service.title}</h3>

                  <p className="services__description">{service.description}</p>

                  <span className="services__price">{service.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
