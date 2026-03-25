import { useState } from "react";

import phoneIcon from "../../assets/icons/phone.svg";
import mapBlackIcon from "../../assets/icons/map-pin-black.svg";
import clockIcon from "../../assets/icons/clock-black.svg";
import mailIcon from "../../assets/icons/mail.svg";
import mapOrangeIcon from "../../assets/icons/map-pin-orange.svg";
import "./Contact.css";

const contactInfo = [
  { icon: phoneIcon, title: "Phone", lines: ["(555) 123-4567"] },
  {
    icon: mapBlackIcon,
    title: "Address",
    lines: ["123 Main Street", "Downtown, NY 10001"],
  },
  {
    icon: clockIcon,
    title: "Business Hours",
    lines: ["Mon-Fri: 9AM-8PM", "Sat: 9AM-6PM", "Sun: 10AM-5PM"],
  },
  { icon: mailIcon, title: "Email", lines: ["info@fademasters.com"] },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks ${formData.name}, we’ll be in touch soon!`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        {/* Header */}
        <div className="contact__header">
          <h2 className="contact__title">Get In Touch</h2>
          <div className="contact__divider"></div>
          <p className="contact__subtitle">
            Book your appointment or reach out with any questions
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Side */}
          <div className="contact__info">
            {contactInfo.map((item, index) => (
              <div className="contact__item" key={index}>
                <div className="contact__icon-box">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="contact__item-content">
                  <h3 className="contact__item-title">{item.title}</h3>
                  <p className="contact__item-text">
                    {item.lines.map((line, i) => (
                      <span key={i} className="contact__item-text-line">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="contact__map">
              <img
                src={mapOrangeIcon}
                alt="map"
                className="contact__map-icon"
              />
              <p className="contact__map-text">Map Placeholder</p>
              <span className="contact__map-address">
                123 Main Street, Downtown
              </span>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label className="contact__form-label">Name</label>
              <input
                className="contact__form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__form-label">Email</label>
              <input
                className="contact__form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__form-label">Message</label>
              <textarea
                className="contact__form-input"
                name="message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your desired service or ask a question..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
