import React from "react";
import "./Skills.css";
import SkillJson from "../Json/Skills.json";
import { useEffect } from "react";

function Skills() {
  return (
    <>
      <div className="skillsContainer">
        <div className="skillDiv">
          <div className="skillHeading">
            <h3>Skills ?</h3>
          </div>
          <div className="skill">
            <div className="skillCard">
              {SkillJson.map((skill, index) => (
                <div className="skill1 reactDiv" key={index} data-aos="fade-up" >
                  <div className="skillInfo">
                    <h3>
                      Language : <span className="react span1">{skill.language}</span>
                    </h3>
                    <h3>
                      Knoweldge :{" "}
                      <span className="react span1">{skill.knowledge}</span>
                    </h3>
                    <h3>
                      Skill Level : <span>{skill.skillLevel}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
