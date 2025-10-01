import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/frontend/Home'
import ChatBot from './component/frontend/ChatBot';
// import ComingSoonMessage from './component/frontend/ComingSoonMessage'

function App() {

  return (
    <>
    <Home />
    {/* <ComingSoonMessage /> */}
    <ChatBot />
    </>
  )
}

export default App
