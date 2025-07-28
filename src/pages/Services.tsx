import { Button } from "@/components/ui/button"

function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Software Development",
                description: "Tailored software solutions designed to meet your specific business needs",
                features: [
                  "Requirements analysis",
                  "Custom development",
                  "Testing & QA",
                  "Deployment & maintenance"
                ]
              },
              {
                title: "Cloud Solutions",
                description: "Comprehensive cloud services for modern businesses",
                features: [
                  "Cloud migration",
                  "Infrastructure setup",
                  "Cloud optimization",
                  "24/7 monitoring"
                ]
              },
              {
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications",
                features: [
                  "iOS development",
                  "Android development",
                  "React Native apps",
                  "App maintenance"
                ]
              },
              {
                title: "IT Consulting",
                description: "Expert guidance for your technology decisions",
                features: [
                  "Technology assessment",
                  "Digital transformation",
                  "Security consulting",
                  "Strategy planning"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-secondary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and requirements"
              },
              {
                step: "02",
                title: "Planning",
                description: "Developing a strategic solution approach"
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing the solution with precision"
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and optimization"
              }
            ].map((process, index) => (
              <div key={index} className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React", "Node.js", "Python", "AWS",
              "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-xl font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">Ready to transform your business with our services?</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 