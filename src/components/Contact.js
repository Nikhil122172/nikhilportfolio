import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact</h1>

      <div className="contact-info">
        <div className="info-card">
          <FaPhone className="icon" />
          <div>
            <h3>Phone</h3>
            <p>+91 6202609186</p>
          </div>
        </div>

        <div className="info-card">
          <FaEnvelope className="icon" />
          <div>
            <h3>Email</h3>
            <p>nikhil20092003@gmail.com</p>
          </div>
        </div>

        <div className="info-card">
          <FaLinkedin className="icon" />
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/nikhil-kumar-17b822256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nikhil-kumar-17b822256
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Send Me a Message</h2>
        <form
          className="contact-form"
          action="mailto:nikhil@example.com"
          method="post"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
