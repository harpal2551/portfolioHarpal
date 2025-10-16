import React from "react";
import "./ContactInfo.css";
// import { faInstagram, faLinkedin, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

function ContactInfo() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i33ak58",
        "template_a9my2kr",
        e.target,
        "0hY4V9NWvCGVfX3yZ"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Error: " + error.text);
        }
      );
  };

  return (
    <div className="contact-form-container " data-aos="fade-down">
      <div className="detailInfo">
        <div className="contact-info-section">
          <h3>CONTACT INFO</h3>
          <p>Harpal Singh</p>
          <p>Phone: +91 7696158219</p>
          <p>Email: harpal4460@gmail.com</p>
          <p>Location: Mohali, (Chandigarh) Punjab, India</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="insta" />
            <a
              href="https://www.linkedin.com/in/harpal-singh-3253742b6/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => console.log("Link clicked")}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="linkdin"
              />
            </a>
            <FontAwesomeIcon icon={faGithub} size="2x" className="gitIcon" />
          </div>
          <p className="freelance-text">Available for freelance projects.</p>
        </div>
      </div>

      <div className="submit-form-section desktopScreen">
        <h3>SUBMIT FORM</h3>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Your Name" name="name" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="+91 (XXX) XXX-XAX" name="phone" />
          </div>
          <div className="form-group message-group">
            <textarea
              placeholder="Type your message here..."
              rows="4"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactInfo;
