import React from "react";
import "./Education.css";
import EducationJson from '../Json/Education.json'

function Education() {
  return (
    <>
      <div className="educationContainerDiv">
        <div className="educationDivHeading">
          <div className="educationHeading">
            <h2>Qualification</h2>
          </div>
        </div>
        <div className="educationContainer">
          <div className="educationDiv">
            {EducationJson.map((edu, index) => (
              <div
                className={`educationItem ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={index}
              >
                <h3>{edu.college}</h3>
                <p>University/Board: {edu.university}</p>
                <p>Stream: {edu.stream}</p>
                <p>Batch: {edu.batch}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
