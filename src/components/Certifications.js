import React from "react";
import "../styles/Certifications.css";
import HTMLCSSJS from "../assets/certifications/ravic.png";
import PHP from "../assets/certifications/ravic2.png";
import DSA from "../assets/certifications/dsagfg.jpg";
import CloudComputing from "../assets/certifications/nptelcloud.png";

const Certifications = () => {
  const certificates = [
    {
      image: HTMLCSSJS,
      name: "JavaScript, Nodejs & Expressjs for Web Developers - Udemy",
    },
    // {
    //   image: Nodejs,
    //   name: "Server side JavaScript with Node.js - Coursera",
    // },
    {
      image: PHP,
      name: "Python for beginner - Udemy",
    },
    // {
    //   image: DSA,
    //   name: "GeeksForGeeks - Data Structures: Deep Dive Using Java",
    // },
    // {
    //   image: CloudComputing,
    //   name: "Cloud Computing - NPTEL",
    // },
  ];

  return (
    <div className="certifications-container">
      <h1 className="certifications-heading">Certifications</h1>
      {certificates.map((cert, index) => (
        <div className="cert-card" key={index}>
          <div className="cert-image">
            <img src={cert.image} alt={`Certificate ${index + 1}`} />
          </div>
          <div className="cert-name">
            <h2>{cert.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
