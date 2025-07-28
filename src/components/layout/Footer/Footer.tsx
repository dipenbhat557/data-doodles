const Footer: React.FC = () => {
  return (
    <footer className='bg-[#1b2144] text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-lg mb-4'>About Us</h3>
            <p className='text-gray-300'>
              Data Doodles provides innovative IT solutions and services to help businesses thrive in the digital age.
            </p>
          </div>
          
          <div>
            <h3 className='font-bold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href='/' className='text-gray-300 hover:text-white'>Home</a></li>
              <li><a href='/products' className='text-gray-300 hover:text-white'>Products</a></li>
              <li><a href='/services' className='text-gray-300 hover:text-white'>Services</a></li>
              <li><a href='/contact-us' className='text-gray-300 hover:text-white'>Contact Us</a></li>
              <li><a href='/about-us' className='text-gray-300 hover:text-white'>About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className='font-bold text-lg mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li><a href='/services#web' className='text-gray-300 hover:text-white'>Web Development</a></li>
              <li><a href='/services#mobile' className='text-gray-300 hover:text-white'>Mobile Apps</a></li>
              <li><a href='/services#cloud' className='text-gray-300 hover:text-white'>Cloud Solutions</a></li>
              <li><a href='/services#consulting' className='text-gray-300 hover:text-white'>IT Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className='font-bold text-lg mb-4'>Contact Info</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>Baluwatar-03, Kathmandu</li>
              <li>Bagmati, Nepal</li>
              <li>Phone: +9779818346503</li>
              <li>Email: info@datadoodlestech.com</li>
            </ul>
          </div>
        </div>
        
        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-300'>
          <p>&copy; {new Date().getFullYear()} Data Doodles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 