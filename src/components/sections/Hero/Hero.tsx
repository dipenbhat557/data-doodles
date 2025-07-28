import { Button } from '@/components/ui/button'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const titleComponent = (
    <div className='inline-block  mb-4 px-4 py-2 bg-blue-500/10 rounded-full'>
      <span className='text-white text-lg'>Where Ideas Become Reality</span>
    </div>
  )

  const navigate = useNavigate();

  return (
    <section className='relative min-h-screen overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#1b2144] to-[#1b2144]/90'>
        {/* Animated Gradient Overlay */}
        <div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(8,159,228,0.2),transparent_50%)]'></div>
        
        {/* Animated Shapes */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-20 w-72 h-72 bg-[#089fe4]/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#089fe4]/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>

        {/* Grid Pattern */}
        <div 
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        ></div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-16 h-16 bg-white/5 rounded-lg
                transform rotate-45 animate-float
                ${i === 0 ? 'top-20 left-[20%]' : ''}
                ${i === 1 ? 'top-40 right-[30%]' : ''}
                ${i === 2 ? 'bottom-40 left-[40%]' : ''}
                ${i === 3 ? 'bottom-20 right-[25%]' : ''}
                ${i === 4 ? 'top-1/2 left-[15%]' : ''}
              `}
              style={{
                animationDelay: `${i * 1.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <ContainerScroll titleComponent={titleComponent}>
        <div className='flex items-center justify-center h-full relative z-10'>
          <div className='max-w-3xl text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg'>
              Data Doodles Pvt. Ltd.
            </h1>
            
            <p className='text-xl text-white/90 mb-8 drop-shadow-lg'>
              Transforming your ideas into innovative digital solutions
            </p>
            
            <div className='flex flex-wrap gap-4 justify-center'>
              <Button 
                size='lg'
                className='bg-[#089fe4] cursor-pointer hover:bg-[#089fe4]/80 text-white shadow-lg transition-all duration-300 hover:scale-105'
                onClick={() => navigate('/contact-us')}
              >
                Get Started
              </Button>
              
              <Button 
                variant='outline' 
                size='lg'
                onClick={() => navigate('/about-us')}
                className='border-white cursor-pointer text-primary hover:bg-white hover:text-[#1b2144] shadow-lg transition-all duration-300 hover:scale-105'
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Mouse Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50'>
        <div className='w-6 h-10 border-2 border-white/20 rounded-full mb-2 flex justify-center'>
          <div className='w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll'></div>
        </div>
        <span className='text-sm'>Scroll Down</span>
      </div>
    </section>
  )
}

// Add animation keyframes to your global CSS or create a new style tag
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(45deg); }
    50% { transform: translateY(-20px) rotate(45deg); }
  }

  @keyframes scroll {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-scroll {
    animation: scroll 2s ease-in-out infinite;
  }
`

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

export default Hero 