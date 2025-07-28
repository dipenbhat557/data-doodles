import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-background flex flex-col'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App