import { useState } from 'react'
import { User, Building, Target, MapPin, Phone, Mail, Globe, Save, Edit3 } from 'lucide-react'

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    business: 'Kumar Digital Solutions',
    role: 'Founder & CEO',
    location: 'Hyderabad, Telangana',
    phone: '+91 98765 43210',
    email: 'rajesh@kumardigital.com',
    website: 'www.kumardigital.com',
    description: 'Helping small businesses grow through digital marketing and web development solutions.',
    idealCustomer: 'Small to medium businesses looking to establish online presence and grow digitally',
    services: 'Web Development, Digital Marketing, SEO, Social Media Marketing',
    targetIndustries: 'Retail, Healthcare, Education, Professional Services',
    referralPreferences: 'Quality over quantity - looking for businesses ready to invest in growth'
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log('Saving profile:', profile)
  }

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Business Profile</h1>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isEditing 
                  ? 'bg-secondary-600 hover:bg-secondary-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </>
              ) : (
                <>
                  <Edit3 className="h-4 w-4" />
                  <span>Edit Profile</span>
                </>
              )}
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Create your business profile to connect with the right referral partners
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.business}
                        onChange={(e) => handleInputChange('business', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.business}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role/Position
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.role}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.location}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profile.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={3}
                      className="input-field"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.description}</p>
                  )}
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.email}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    {isEditing ? (
                      <input
                        type="url"
                        value={profile.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.website}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Referral Preferences</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ideal Customer Profile
                    </label>
                    {isEditing ? (
                      <textarea
                        value={profile.idealCustomer}
                        onChange={(e) => handleInputChange('idealCustomer', e.target.value)}
                        rows={2}
                        className="input-field"
                        placeholder="Describe your ideal customer..."
                      />
                    ) : (
                      <p className="text-gray-900">{profile.idealCustomer}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services You Offer
                    </label>
                    {isEditing ? (
                      <textarea
                        value={profile.services}
                        onChange={(e) => handleInputChange('services', e.target.value)}
                        rows={2}
                        className="input-field"
                        placeholder="List your main services..."
                      />
                    ) : (
                      <p className="text-gray-900">{profile.services}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Industries
                    </label>
                    {isEditing ? (
                      <textarea
                        value={profile.targetIndustries}
                        onChange={(e) => handleInputChange('targetIndustries', e.target.value)}
                        rows={2}
                        className="input-field"
                        placeholder="Industries you serve best..."
                      />
                    ) : (
                      <p className="text-gray-900">{profile.targetIndustries}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Referral Notes
                    </label>
                    {isEditing ? (
                      <textarea
                        value={profile.referralPreferences}
                        onChange={(e) => handleInputChange('referralPreferences', e.target.value)}
                        rows={2}
                        className="input-field"
                        placeholder="Any specific preferences for referrals..."
                      />
                    ) : (
                      <p className="text-gray-900">{profile.referralPreferences}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">{profile.name}</div>
                    <div className="text-sm text-gray-500">{profile.role}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">{profile.business}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div className="text-gray-600">{profile.location}</div>
                </div>

                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-gray-400" />
                  <div className="text-gray-600">Looking for quality referrals</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full btn-primary text-sm">
                    Join Community
                  </button>
                  <button className="w-full btn-outline text-sm">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="card mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Completion</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Profile Strength</span>
                  <span className="font-medium text-secondary-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="text-xs text-gray-500">
                  Add more details to improve your profile visibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage