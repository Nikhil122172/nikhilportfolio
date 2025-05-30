import React from "react";
import "../styles/Achievement.css";
import LeetCode from '../assets/Achievements/50days.png';
import CodeChef from '../assets/Achievements/CodeChefBadge50days.png';

const Achievement = () => {
  return (
    <div className="achievements-container">
      <h1 className="achievements-heading">Achievements</h1>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src="https://cdn-icons-png.flaticon.com/512/4332/4332609.png" alt="CodeChef Streak" />
        </div>
        <div className="achievement-text">
          <h2>Solved 400+ Coding Problems Across Platforms</h2>
          <p>
            Demonstrated consistent problem-solving skills by solving over 400
            coding problems across competitive platforms such as LeetCode,
            GeeksforGeeks, and CodeChef. This reflects a strong foundation in
            algorithms, data structures, and programming logic.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={LeetCode} alt="LeetCode 50 Days" />
        </div>
        <div className="achievement-text">
          <h2>LeetCode 50 Days Badge – 2024</h2>
          <p>
            Earned the prestigious LeetCode 50 Days Badge in 2024 for
            maintaining an active streak of problem-solving over 50 consecutive
            days. Recognized among the top 4.2% of global users, showcasing
            dedication, consistency, and technical proficiency.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={CodeChef} alt="CodeChef Streak" />
        </div>
        <div className="achievement-text">
          <h2>CodeChef Gold Streak – 50 Days</h2>
          <p>
            Awarded the Gold Streak Badge by CodeChef for maintaining a 50-day
            continuous coding streak. This achievement highlights discipline,
            daily commitment, and sustained engagement in competitive programming
            challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
