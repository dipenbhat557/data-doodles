import { useState } from 'react'
import { logo } from '@/assets'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-primary/20 shadow-sm'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <a href='/' className='flex items-center'>
              <img src={logo} alt='Data Doodles' className='h-10 w-auto' />
            </a>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <a href='/' className='text-white hover:text-slate-300'>Home</a>
            <a href='/products' className='text-white hover:text-slate-300'>Products</a>
            <a href='/services' className='text-white hover:text-slate-300'>Services</a>
            <a href='/contact-us' className='text-white hover:text-slate-300'>Contact Us</a>
            <a href='/about-us' className='text-white hover:text-slate-300'>About Us</a>
          </nav>

          <div className='hidden md:flex items-center space-x-4'>
            <a href='tel:+9779818346503' className='text-white hover:text-slate-300 font-semibold'>+9779818346503</a>
          </div>

          <button 
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4'>
            <nav className='flex flex-col space-y-4'>
              <a href='/' className='text-primary hover:text-primary/80'>Home</a>
              <a href='/products' className='text-gray-600 hover:text-primary'>Products</a>
              <a href='/services' className='text-gray-600 hover:text-primary'>Services</a>
              <a href='/contact-us' className='text-gray-600 hover:text-primary'>Contact Us</a>
              <a href='/about-us' className='text-gray-600 hover:text-primary'>About Us</a>
              <a href='tel:+9779818346503' className='text-primary font-semibold'>+9779818346503</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 