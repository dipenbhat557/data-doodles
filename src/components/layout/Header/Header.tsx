import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logo } from '@/assets'
import { IoMdMail, IoMdCall, IoMdClose, IoMdMenu } from "react-icons/io";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
        window.scrollTo(0, 0)
    }, [location.pathname])

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/products', label: 'Products' },
        { to: '/services', label: 'Services' },
        { to: '/contact-us', label: 'Contact Us' },
        { to: '/about-us', label: 'About Us' }
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-primary/80 backdrop-blur-lg shadow-lg'
                    : 'bg-primary'
            }`}
        >
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <Link to='/' className='flex items-center'>
                            <img src={logo} alt='Data Doodles' className='h-16 w-auto' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={`font-medium transition-colors duration-200 ${
                                    location.pathname === item.to ? 'text-secondary' : 
                                    isScrolled
                                        ? 'text-gray-400 hover:text-slate-400'
                                        : 'text-white hover:text-white/80'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Number and Email */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <div className='flex items-center gap-4'>
                            <a
                                href='tel:+9779818346503'
                                className={`flex items-center gap-2 font-semibold transition-colors duration-200 group ${
                                    isScrolled
                                        ? 'text-gray-400 hover:text-slate-400'
                                        : 'text-white hover:text-white/80'
                                }`}
                                title='Call us'
                            >
                                <IoMdCall className='w-5 h-5 group-hover:scale-110 transition-transform' />
                                <span className='hidden lg:block'>+977 981834650</span>
                            </a>
                            <a 
                                href='mailto:datadoodless@gmail.com'
                                className={`flex items-center gap-2 font-semibold transition-colors duration-200 group ${
                                    isScrolled
                                        ? 'text-gray-400 hover:text-slate-400'
                                        : 'text-white hover:text-white/80'
                                }`}
                                title='Email us'
                            >
                                <IoMdMail className='w-5 h-5 group-hover:scale-110 transition-transform' />
                                <span className='hidden lg:block'>datadoodless@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors ${
                            isScrolled
                                ? 'text-gray-400 hover:text-slate-400'
                                : 'text-white hover:bg-white/10'
                        }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <IoMdClose className='w-5 h-5' />
                        ) : (
                            <IoMdMenu className='w-5 h-5' />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='md:hidden py-4 px-2 bg-white rounded-lg shadow-lg mb-4'>
                        <nav className='flex flex-col space-y-4'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className={`text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors ${
                                        location.pathname === item.to ? 'bg-gray-50 text-primary' : ''
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className='flex flex-col space-y-2 px-4 py-2'>
                                <a
                                    href='tel:+9779818346503'
                                    className='flex items-center gap-2 text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors'
                                >
                                    <IoMdCall className='w-5 h-5' />
                                    <span>+977 981834650</span>
                                </a>
                                <a
                                    href='mailto:datadoodless@gmail.com'
                                    className='flex items-center gap-2 text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors'
                                >
                                    <IoMdMail className='w-5 h-5' />
                                    <span>datadoodless@gmail.com</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header 