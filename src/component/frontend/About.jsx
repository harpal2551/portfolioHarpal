import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutPageContainer">
        <div className="twoLayer">
          <div className="leftAbout">
            <h2>About Me!</h2>
          </div>
          <div className="rightAboutCard">
            <h3>Who Am i?</h3>
            <p>
              My name is Harpal Singh. I am a ReactJS developer and a video
              editor. I have strong knowledge of frontend technologies like
              HTML, CSS, Bootstrap, JavaScript, and ReactJS. On the backend
              side, I am familiar with MongoDB, Express, and NodeJS.  For video
              editing, I work with tools like Adobe Premiere Pro, After Effects,
              and CapCut to create professional and creative videos. Right now,
              my main focus is building a career as a web developer. Video
              editing is my passion and an extra natural skill that adds
              creativity to my profile.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
