import { useState } from 'react'
import Login from './pages/Log_in'
import LandingPage from './pages/Landing'
import Home from './pages/Home'
import Contact from './pages/Contact'

import Upload from './pages/Upload'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <div className='bg-[#0A0D14]'>
    <Home/>
    <LiveLocation/>
    </div>
  )
}

export default App
