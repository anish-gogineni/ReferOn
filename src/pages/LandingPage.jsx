import { Link } from 'react-router-dom'
import { Users, Target, TrendingUp, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: Target,
      title: "Define Your Ideal Customer",
      description: "Create detailed profiles of who you're looking for and what services you offer"
    },
    {
      icon: Users,
      title: "Join Trusted Communities",
      description: "Connect with local business networks like HyderabadMSMEs or ReddyBusinessOwners"
    },
    {
      icon: TrendingUp,
      title: "Track Every Referral",
      description: "Monitor leads, feedback, and performance with complete transparency"
    },
    {
      icon: Shield,
      title: "Quality Over Quantity",
      description: "Closed network approach ensures genuine connections, not spam"
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Enterprises",
      content: "ReferOn helped me connect with quality leads in my local network. The trust factor is amazing.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      business: "Sharma Consultancy",
      content: "Finally, a platform that understands how real business relationships work. Highly recommended!",
      rating: 5
    },
    {
      name: "Mohammed Ali",
      business: "Tech Solutions",
      content: "The community-based approach makes all the difference. Quality referrals, genuine connections.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Grow Your Business Through
              <span className="text-primary-600 block">Trusted Referrals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join local business communities, share quality leads, and build lasting relationships. 
              ReferOn combines the simplicity of WhatsApp with the structure of a CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profile" className="btn-primary text-lg px-8 py-3">
                Create Your Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/communities" className="btn-outline text-lg px-8 py-3">
                Browse Communities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How ReferOn Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, structured, and designed for real business relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="card text-center hover:shadow-md transition-shadow">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Community Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Your Local Business Community
            </h2>
            <p className="text-xl text-gray-600">
              Connect with like-minded entrepreneurs in your area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">HyderabadMSMEs</h3>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded-full text-sm">
                  245 members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Small and medium business owners in Hyderabad sharing leads and opportunities
              </p>
              <div className="text-sm text-primary-600 font-medium">
                ReferOn.app/HyderabadMSMEs
              </div>
            </div>

            <div className="card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">ReddyBusinessOwners</h3>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded-full text-sm">
                  89 members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Business community for Reddy entrepreneurs across South India
              </p>
              <div className="text-sm text-primary-600 font-medium">
                ReferOn.app/ReddyBusinessOwners
              </div>
            </div>

            <div className="card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">TechStartupsBangalore</h3>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded-full text-sm">
                  156 members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Tech entrepreneurs and startup founders in Bangalore ecosystem
              </p>
              <div className="text-sm text-primary-600 font-medium">
                ReferOn.app/TechStartupsBangalore
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Business Owners Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Network?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of business owners who are already growing through trusted referrals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link to="/communities" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Explore Communities
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage