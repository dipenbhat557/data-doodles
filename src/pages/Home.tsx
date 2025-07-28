import Hero from "@/components/sections/Hero/Hero"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom web applications built with modern technologies",
                icon: "🌐"
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications",
                icon: "📱"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable and secure cloud infrastructure",
                icon: "☁️"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose Data Doodles?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team of experienced developers and designers deliver exceptional results.",
                icon: "👨‍💻",
                highlight: "100+ Years Combined Experience"
              },
              {
                title: "Modern Technologies",
                description: "We use the latest technologies to build scalable and efficient solutions.",
                icon: "🚀",
                highlight: "Cutting-edge Stack"
              },
              {
                title: "Custom Solutions",
                description: "Tailored solutions designed specifically for your business needs.",
                icon: "⚡",
                highlight: "Personalized Approach"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support to ensure your systems run smoothly.",
                icon: "🔧",
                highlight: "Always Available"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <div className="bg-primary/5 rounded-lg px-3 py-1 text-sm text-primary font-medium mb-4 inline-block">
                  {item.highlight}
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-primary  hover:bg-primary-dark text-white cursor-pointer"
              onClick={() => navigate('/about-us')}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Let's transform your ideas into reality</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className=" bg-secondary hover:bg-secondary-light cursor-pointer" onClick={() => navigate('/contact-us')}>
              Contact Us
            </Button>
            <Button onClick={() => navigate('/about-us')} size="lg" variant="outline" className="border-white text-primary cursor-pointer hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 