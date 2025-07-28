import Hero from "@/components/sections/Hero/Hero"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Timeline } from "@/components/ui/timeline"
import { motion } from "framer-motion"

function Home() {
  const navigate = useNavigate()

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, scalable, and user-friendly solutions.",
      icon: "🌐",
      features: ["Custom Web Apps", "E-commerce Solutions", "Progressive Web Apps", "API Development"]
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      icon: "📱",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure designed to meet your business needs with optimal performance and reliability.",
      icon: "☁️",
      features: ["AWS Solutions", "Azure Services", "Cloud Migration", "DevOps"]
    }
  ]

  const whyChooseUs = [
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
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-primary">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions to help your business thrive in the digital age
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <CardSpotlight className="h-full">
                  <div className="relative z-20">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-neutral-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 text-blue-500 mt-1 shrink-0"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                              fill="currentColor"
                              strokeWidth="0"
                            />
                          </svg>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose Data Doodles?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business
            </p>
          </motion.div>

          <Timeline items={whyChooseUs} className="max-w-3xl mx-auto" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white cursor-pointer"
              onClick={() => navigate('/about-us')}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">Let's transform your ideas into reality</p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light cursor-pointer" 
                onClick={() => navigate('/contact-us')}
              >
                Contact Us
              </Button>
              <Button 
                onClick={() => navigate('/about-us')} 
                size="lg" 
                variant="outline" 
                className="border-white text-primary hover:bg-white hover:text-primary cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 