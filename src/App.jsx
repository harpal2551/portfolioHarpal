import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/frontend/Home'
import ChatBot from './component/frontend/ChatBot';
import AOS from "aos";
import "aos/dist/aos.css";
import ComingSoonMessage from './component/frontend/ComingSoonMessage'

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true,     // animation happens only once
    });
  }, []);

  return (
    <>
    
    <Home />
    <ComingSoonMessage />
    <ChatBot />
    </>
  )
}

export default App
