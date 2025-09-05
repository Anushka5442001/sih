import { useState } from 'react'
import Home from './pages/Home'
import LiveLocation from './pages/Traffic_update'
import Upload from './pages/Upload'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <div className='bg-[#0A0D14] min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/live' element={<LiveLocation />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </div>
  )
}

export default App
