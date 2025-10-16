import React from 'react'
import './Home.css'
// import Resume from '../media/Resume_Harpal.pdf'
import Resume from '../media/reactJSdeveloper.pdf'
import About from './About'
import Skills from './Skills'
import WebBanner from './WebBanner'
import ProjectPage from './ProjectPage'
// import Link from 'react-router-dom'
import Education from './Education';
import Experince from './Experince'

function Home() {
  return (
    <>
    <div className="homeContainer">
        <div className="homeDiv">
            <div className="centerHeading">
                <h2>Harpal Singh</h2>
                <p>ReactJS Developer</p>
            </div>
            <div className="homeResumeBtn">
                <a href={Resume} download="Harpal_Singh_Resume.pdf">
                <button type='downlooad' className="homeResumeButton">Download</button>
                </a>
            </div>
        </div>
    </div>
    <About />
    <Skills />
    <WebBanner />
    <ProjectPage />
    <Education />
    <Experince />
    </>
  )
}

export default Home