import React from "react";
import "../styles/Projects.css";
import momNoteImg from '../assets/images/ecommerceimg.png';
import bloodImg from '../assets/images/eventimg.jpg';
import rentalImg from '../assets/images/cabconnect.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>

      <div className="project-card">
        <h2 className="project-title">E-Commerce Platform for Everyday Essentials</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            A feature-rich e-commerce website crafted to bring warmth, trust, and convenience to your online shopping experience. Users can explore trending products from an external API alongside community-recommended items stored in a MongoDB database. The platform boasts a sleek and intuitive UI with real-time search, advanced filtering options, and instant form validation for a seamless user journey.Fully responsive and mobile-friendly, it uses React routing, reusable components, and robust state management. Built on the MERN stack, with Spoonacular API integration to suggest recipe ideas based on your cart — making shopping feel more personal and guided.
            </p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Spoonacular API</p>
            <div className="project-buttons">
              <a href="https://github.com/Nikhil122172/neokart" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="https://neokart2.onrender.com" target="_blank" rel="noopener noreferrer" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={momNoteImg} alt="down" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">EventEase – Event Booking Platform</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            A feature-rich event booking system designed to simplify the way users discover and attend events. Users can browse trending events via an external API and explore custom community-hosted listings stored in a MongoDB database. The platform delivers a clean, intuitive UI with real-time search, category filters, and responsive design for a smooth booking experience across devices.Event organizers can register, post new events with images and details, manage attendees, and track ticket sales through a dedicated dashboard.
            </p>
            <p><strong>Tech Stack:</strong> PHP, MySQL, HTML, CSS</p>
            <div className="project-buttons">
              <a href="https://github.com/Nikhil122172/neokart" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={bloodImg} alt="event-management" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">CabConnect – Vendor & Driver Onboarding System</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            A streamlined onboarding system designed to simplify and digitize the registration process for cab vendors and drivers. CabConnect enables vendors to register their fleets and drivers to upload required documents securely. Admins can verify submissions, track onboarding status, and manage profiles from a centralized dashboard.The platform features a clean, responsive UI built with React and Tailwind CSS, allowing smooth navigation across devices. Drivers can upload license, ID, and vehicle documents through a guided multi-step form with real-time validation. 
            </p>
            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Node.js, Express, MongoDB</p>
            <div className="project-buttons">
              <a href="https://github.com/Nikhil122172/neokart" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={rentalImg} alt="cab-connect" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
