import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover our innovative software solutions designed to help your business grow.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "CloudManager Pro",
                description: "Complete cloud infrastructure management solution",
                price: "$99/month",
                features: ["Auto-scaling", "Performance monitoring", "Security management"]
              },
              {
                name: "DataSync Enterprise",
                description: "Real-time data synchronization platform",
                price: "$149/month",
                features: ["Real-time sync", "Conflict resolution", "Multi-database support"]
              },
              {
                name: "SecureGuard",
                description: "Advanced security and encryption toolkit",
                price: "$199/month",
                features: ["End-to-end encryption", "Access control", "Threat detection"]
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {product.price}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="cursor-pointer w-full bg-primary hover:bg-primary-dark text-primary" onClick={() => navigate(`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`)}>
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cloud Solutions",
                icon: "☁️",
                description: "Scalable cloud infrastructure products"
              },
              {
                title: "Security Tools",
                icon: "🔒",
                description: "Enterprise-grade security solutions"
              },
              {
                title: "Data Analytics",
                icon: "📊",
                description: "Business intelligence and analytics tools"
              },
              {
                title: "DevOps Tools",
                icon: "⚙️",
                description: "Development and operations automation"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Choose the perfect solution for your business</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              View Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products 