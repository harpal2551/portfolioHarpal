// ProjectPage.jsx
import React, { useState, useEffect, useRef } from "react";
import "./ProjectPage.css";
import Projects from "../Json/Git.json";

function ProjectPage() {
  const [showMessage, setShowMessage] = useState(false);
  const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowMessage(true), 2000); // 2 sec delay
          setTimeout(() => setShowMessage(false), 5000); // 3 sec show
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // mobile me bhi trigger
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
  };
}, []);


  return (
    <div ref={sectionRef} className="projectContiner">
      {/* Overlay Message */}
      {showMessage && (
        <div className="projectMessage">
          This website is currently under work
        </div>
      )}

      <div className="titleProject">
        <h3>Projects</h3>
      </div>
      <div className="projectDiv">
        {Projects.slice(0, 8).map((proj, index) => (
          <div className="projectDesign" key={index}>
            <div className="projectGit">
              <div className="gitImg">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="projectTitle">
                <h3>{proj.title}</h3>
              </div>
              <div className="projectDesc">
                <p>{proj.description}</p>
              </div>
            </div>
            <div className="projectBtn">
              <a href={proj.live_link} target="_blank" rel="noreferrer">
                <h4>Live Project</h4>
              </a>
              <a href={proj.git_link} target="_blank" rel="noreferrer">
                <h4>Github Project</h4>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="seeMoreProject">
        <p>See More</p>
      </div>
    </div>
  );
}

export default ProjectPage;
