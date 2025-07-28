import { Button } from '@/components/ui/button'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

const Hero: React.FC = () => {
  const titleComponent = (
    <div className='inline-block mb-4 px-4 py-2 bg-blue-500/10 rounded-full'>
      <span className='text-white'>Where Ideas Become Reality</span>
    </div>
  )

  return (
    <section className='relative min-h-screen bg-gradient-to-r from-[#1b2144] to-[#1b2144]/90'>
      <ContainerScroll titleComponent={titleComponent}>
        <div className='flex items-center justify-center h-full'>
          <div className='max-w-3xl text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Data Doodles Pvt. Ltd.
            </h1>
            
            <p className='text-xl text-white/90 mb-8'>
              Transforming your ideas into innovative digital solutions
            </p>
            
            <div className='flex flex-wrap gap-4 justify-center'>
              <Button 
                size='lg'
                className='bg-[#089fe4] hover:bg-slate-400 text-white'
              >
                Get Started
              </Button>
              
              <Button 
                variant='outline' 
                size='lg'
                className=' border-white hover:bg-slate-400  hover:text-white'
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}

export default Hero 