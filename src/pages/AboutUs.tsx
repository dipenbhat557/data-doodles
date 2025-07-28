import { ceo } from "@/assets"
import { Button } from "@/components/ui/button"

function AboutUs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Data Doodles</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            We're a team of passionate developers, designers, and innovators dedicated to creating exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Data Doodles, our mission is to empower businesses through innovative technology solutions. We believe in creating software that not only solves problems but also drives growth and success.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Innovation First",
                    description: "Pushing boundaries with cutting-edge solutions"
                  },
                  {
                    title: "Customer Success",
                    description: "Your success is our priority"
                  },
                  {
                    title: "Quality Driven",
                    description: "Excellence in every line of code"
                  },
                  {
                    title: "Continuous Learning",
                    description: "Always evolving and improving"
                  }
                ].map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img
                src={ceo}
                alt="Mr. Prabesh Sharma"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold">Mr. Prabesh Sharma</h3>
              <p className="text-secondary font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Leading Data Doodles with a vision to transform ideas into reality through innovative technology solutions. With extensive experience in the tech industry, Mr. Sharma guides our team towards excellence and innovation.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/prabeshsharma/', '_blank')} className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-white">
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Team Members" },
              { number: "95%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs 