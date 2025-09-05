import React from 'react'
import { Link } from 'react-router-dom'
import car from '../../assets/car.svg'

function Navbar() {
  return (
    <div className='bg-[#0d1117] min-w-[16%] flex flex-col p-4 gap-8 text-gray-400 font-[roboto] border-r border-gray-600 shadow-lg'>
      {/* Header */}
      <div className='flex items-center gap-2 pb-4 border-b border-gray-600'>
        <img src={car} alt="car" className='w-6 h-6' />
        <h2 className='text-white font-bold text-lg tracking-wide'>TRAFFIC FLOW</h2>
      </div>
      
      {/* Navigation Title */}
      <h2 className='italic font-sans font-extrabold text-gray-300 text-sm tracking-widest'>NAVIGATION</h2>
      
      {/* Navigation Links */}
      <div className='italic font-[roboto] flex flex-col gap-3 text-base'>
        <Link to='/' className='text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
          Dashboard
        </Link>
        <Link to='/live' className='text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
          Live location
        </Link>
        <Link to='/upload' className='text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
          Upload files
        </Link>
        <Link to='/' className='text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
          Incidents
        </Link>
        <Link to='/' className='text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
          Analytics
        </Link>
        <Link to='/' className='text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
          Traffic lights
        </Link>
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