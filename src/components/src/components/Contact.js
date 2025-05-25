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
            <p>+91 9508555259</p>
          </div>
        </div>

        <div className="info-card">
          <FaEnvelope className="icon" />
          <div>
            <h3>Email</h3>
            <p>rk3018710@gmail.com</p>
          </div>
        </div>

        <div className="info-card">
          <FaLinkedin className="icon" />
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://linkedin.com/in/r-k-00491123a"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/r-k-00491123a
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Send Me a Message</h2>
        <form
          className="contact-form"
          action="mailto:manikanta@example.com"
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
