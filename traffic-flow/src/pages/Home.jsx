import React from 'react'
import Navbar from '../components/ui/Navbar'
import Pannel from '../components/Pannel'
import TrafficDashboard from '../components/ui/Dashboard'
function Home() {
  return (
    <div className=' w-full bg-[#0A0D14] text-white flex flex-row min-h-screen'>
      <Navbar/>
      <div className='w-full p-3 flex flex-col gap-4'>
        <Pannel />
        <TrafficDashboard />
      </div>
    </div>
  )
}

export default Home