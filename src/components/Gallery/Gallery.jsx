import haircutImg from "../../assets/images/gallery-haircut.jpg";
import hairTrimImg from "../../assets/images/gallery-hair-trim.jpg";
import beardImg from "../../assets/images/gallery-beard-trim.jpg";
import shaveImg from "../../assets/images/gallery-razor-shave.jpg";
import kidsImg from "../../assets/images/gallery-kids-haircut.jpg";
import barberShopImg from "../../assets/images/gallery-barber-shop.jpg";
import "./Gallery.css";

const galleryImages = [
  haircutImg,
  hairTrimImg,
  beardImg,
  shaveImg,
  kidsImg,
  barberShopImg,
];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        {/* Header */}
        <div className="gallery__header">
          <h2 className="gallery__title">Our Work</h2>
          <div className="gallery__divider"></div>
          <p className="gallery__subtitle">
            Check out some of our finest cuts and styles
          </p>
        </div>

        {/* Grid */}
        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <div className="gallery__item" key={index}>
              <img
                src={image}
                alt={`Barbershop work ${index + 1}`}
                className="gallery__image"
              />

              {/* Hover Overlay */}
              <div className="gallery__overlay">
                <div className="gallery__circle"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
