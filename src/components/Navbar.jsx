import React, { useState } from 'react'

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='font-serif bg-blue-500 p-4'>
      <div className="flex justify-between items-center">
        <div className='text-white text-2xl font-bold'>PortfolioSite</div>

        {/* Togggle Menu Button */}
        <div className='md:hidden'>
          <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
            <svg 
              fill='none' 
              stroke='currentColor' 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-6 h-6'
              >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
          <ul className='hidden md:flex space-x-4'>
            <li className='py-2'><a href="#Skills" className='text-white'>Skills</a></li>
            <li className='py-2'><a href="#Transcript" className='text-white'>Transcript</a></li>
            <li className='py-2'><a href="#Cert" className='text-white'>Certificates</a></li>
            <li className='py-2'><a href="#Act" className='text-white'>Activities</a></li>
            <li className='py-2'><a href="#Contact" className='text-white'>Contact</a></li>
          </ul>
      </div>

          

      {/* Mobile Menu */}
      {isMenuOpen ? (
          <ul className='flex-col md:hidden'>
            <li className='py-2'><a href="#Skills" className='text-white'>Skills</a></li>
            <li className='py-2'><a href="#Transcript" className='text-white'>Transcript</a></li>
            <li className='py-2'><a href="#Cert" className='text-white'>Certificates</a></li>
            <li className='py-2'><a href="#Act" className='text-white'>Activities</a></li>
            <li className='py-2'><a href="#Contact" className='text-white'>Contact</a></li>
          </ul>
      ) : null}
      
    </nav>
  )
}

export default Navbar
