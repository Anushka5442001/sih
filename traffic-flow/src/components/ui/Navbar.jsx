import React from 'react'
import { Link } from 'react-router-dom'
import car from '../../assets/car.svg'
function Navbar() {
  return (
    <div className='bg-[#0d1117] min-w-[16%]  flex flex-col   p-1  gap-10 text-gray-400 font-[roboto] border-r-1 border-gray-600 '>
    <div className='flex gap-1.5 border-b-gray-600 border-1 border-t-0 border-l-0 border-r-0 w-100% p-0'><img src={car} alt="car" /><h2>TRAFFIC FLOW</h2></div>
    <h2 className='italic font-sans font-extrabold'>NAVIGATION</h2>
    <div className='italic font-[roboto] h-[50%] flex flex-col gap-3 text-md text-white'>
      <a href="">Dashboard</a>
      <a href="">Live location</a>
      <a href="">Incidents</a>
      <a href="">Analytics</a>
      <a href="">Traffic lights</a>
      </div>
      <div className='flex flex-col h-[30%] gap-3 text-md '>
        <a className='text-red-500' href="">LOG IN</a>
        <a className='text-white' href="">SIGN UP</a>
      </div>
      
      {/* Auth Links */}
      <div className='flex flex-col gap-3 mt-auto mb-6'>
        <a 
          className='text-red-400 hover:text-red-300 font-semibold px-3 py-2 border border-red-400 rounded-md hover:bg-red-400 hover:bg-opacity-10 transition-all duration-200 text-center text-sm' 
          href=""
        >
          LOG IN
        </a>
        <a 
          className='text-white hover:text-gray-200 font-semibold px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-all duration-200 text-center text-sm' 
          href=""
        >
          SIGN UP
        </a>
      </div>
      
      {/* Status Indicator */}
      <div className='text-gray-200 border-t border-gray-600 pt-4 flex items-center justify-center'>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
          <h3 className='text-sm font-medium'>System online</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar