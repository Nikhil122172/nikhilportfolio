import "../styles/Resume.css";
import NikhilCv from '../assets/Achievements/nikhil12_cv.pdf';


const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>

      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <a href={NikhilCv} download className="download-btn">
          Download CV
        </a>
      </div>
      <div className="resume-section">
        <div className="resume-card">
          <h3>2022 - 2026</h3>
          <p><strong>B.Tech in Computer Science & Engineering</strong></p>
          <p>Lovely Professional University, Phagwara</p>
          <p>CGPA: 7.8/10</p>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Languages:</strong> Java, JavaScript, HTML, CSS</li>
            <li><strong>Frameworks:</strong> React, Flutter, Express.js</li>
            <li><strong>Databases:</strong> MongoDB, MySQL</li>
            <li><strong>Tools & Platforms:</strong> Node.js, Git, GitHub, Figma</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Projects</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Mom's Note – Recipe Sharing Website:</strong> React, MongoDB</li>
            <li><strong>Blood Donation Management System:</strong> PHP, MySQL</li>
            <li><strong>FindURNest – Online Rental Booking:</strong> MERN Stack</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Certifications</h2>
        <div className="resume-card">
          <ul>
            <li>React, Node.js, and Javascript for Web Developers from Udemy</li>
            <li>Flutter with Dart for Mobile Applications from Udemy</li>
            <li>Data Structures and Algorithms from GeeksForGeeks</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Competitive Programming</h2>
        <div className="resume-card">
          <p>Active on <strong>LeetCode</strong>, <strong>GeeksforGeeks Practice</strong>, and <strong>CodeChef</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;