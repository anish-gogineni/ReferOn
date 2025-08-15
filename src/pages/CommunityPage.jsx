import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { 
  Users, 
  Plus, 
  Search, 
  MapPin, 
  TrendingUp, 
  MessageCircle, 
  ExternalLink,
  Star,
  Filter,
  Calendar,
  Clock
} from 'lucide-react'

const CommunityPage = () => {
  const { communityName } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  // Mock data for communities
  const communities = [
    {
      id: 1,
      name: 'HyderabadMSMEs',
      url: 'HyderabadMSMEs',
      description: 'Small and medium business owners in Hyderabad sharing leads and opportunities',
      members: 245,
      location: 'Hyderabad, Telangana',
      category: 'Local Business',
      rating: 4.8,
      recentActivity: '2 hours ago',
      leads: 156,
      joined: true
    },
    {
      id: 2,
      name: 'ReddyBusinessOwners',
      url: 'ReddyBusinessOwners',
      description: 'Business community for Reddy entrepreneurs across South India',
      members: 89,
      location: 'South India',
      category: 'Community',
      rating: 4.9,
      recentActivity: '4 hours ago',
      leads: 78,
      joined: false
    },
    {
      id: 3,
      name: 'TechStartupsBangalore',
      url: 'TechStartupsBangalore',
      description: 'Tech entrepreneurs and startup founders in Bangalore ecosystem',
      members: 156,
      location: 'Bangalore, Karnataka',
      category: 'Technology',
      rating: 4.7,
      recentActivity: '1 hour ago',
      leads: 234,
      joined: true
    },
    {
      id: 4,
      name: 'WomenEntrepreneurs',
      url: 'WomenEntrepreneurs',
      description: 'Supporting women-led businesses across India',
      members: 198,
      location: 'Pan India',
      category: 'Women in Business',
      rating: 4.9,
      recentActivity: '30 minutes ago',
      leads: 189,
      joined: false
    }
  ]

  // Mock data for community activities
  const activities = [
    {
      id: 1,
      type: 'lead',
      user: 'Priya Sharma',
      business: 'Sharma Consultancy',
      content: 'Looking for a reliable web development partner for my client in retail space',
      time: '2 hours ago',
      responses: 5
    },
    {
      id: 2,
      type: 'referral',
      user: 'Mohammed Ali',
      business: 'Tech Solutions',
      content: 'Referred Kumar Digital Solutions to a client - closed deal worth ₹2.5L',
      time: '4 hours ago',
      responses: 12
    },
    {
      id: 3,
      type: 'feedback',
      user: 'Rajesh Kumar',
      business: 'Kumar Digital Solutions',
      content: 'Great experience working with client referred by @PriyaSharma. Highly professional!',
      time: '6 hours ago',
      responses: 8
    }
  ]

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || 
                         (filter === 'joined' && community.joined) ||
                         (filter === 'available' && !community.joined)
    return matchesSearch && matchesFilter
  })

  // If viewing a specific community
  if (communityName) {
    const community = communities.find(c => c.url === communityName)
    
    if (!community) {
      return (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Community not found</h1>
            <p className="text-gray-600 mt-2">The community you're looking for doesn't exist.</p>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Community Header */}
          <div className="card mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{community.name}</h1>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{community.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{community.members} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{community.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{community.leads} leads shared</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Active {community.recentActivity}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-primary-600">
                    ReferOn.app/{community.url}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                {community.joined ? (
                  <button className="btn-secondary">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Open Chat
                  </button>
                ) : (
                  <button className="btn-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Join Community
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Community Activity Feed */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                  <button className="btn-outline text-sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Share Lead
                  </button>
                </div>

                <div className="space-y-6">
                  {activities.map((activity) => (
                    <div key={activity.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                            {activity.type === 'lead' && <TrendingUp className="h-5 w-5" />}
                            {activity.type === 'referral' && <ExternalLink className="h-5 w-5" />}
                            {activity.type === 'feedback' && <MessageCircle className="h-5 w-5" />}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-900">{activity.user}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{activity.business}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{activity.time}</span>
                          </div>
                          <p className="text-gray-700 mb-2">{activity.content}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <button className="hover:text-primary-600">
                              <MessageCircle className="h-4 w-4 inline mr-1" />
                              {activity.responses} responses
                            </button>
                            <button className="hover:text-primary-600">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Members</span>
                    <span className="font-medium">{community.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Leads Shared</span>
                    <span className="font-medium">{community.leads}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Today</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-medium text-secondary-600">73%</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Quality referrals only</p>
                  <p>• Acknowledge received leads</p>
                  <p>• Be respectful and professional</p>
                  <p>• Share success stories</p>
                  <p>• Help fellow members grow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Community discovery page
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Communities</h1>
          <p className="text-gray-600">
            Join trusted communities and start sharing quality referrals
          </p>
        </div>

        {/* Search and Filter */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search communities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="input-field w-auto"
              >
                <option value="all">All Communities</option>
                <option value="joined">Joined</option>
                <option value="available">Available</option>
              </select>
            </div>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Community
            </button>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <div key={community.id} className="card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {community.name}
                  </h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{community.rating}</span>
                  </div>
                </div>
                {community.joined && (
                  <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded-full text-xs">
                    Joined
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                {community.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{community.members} members</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>{community.leads} leads</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{community.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Active {community.recentActivity}</span>
                </div>
              </div>

              <div className="text-xs text-primary-600 mb-4 font-medium">
                ReferOn.app/{community.url}
              </div>

              <div className="flex space-x-2">
                {community.joined ? (
                  <>
                    <button 
                      onClick={() => window.location.href = `/${community.url}`}
                      className="btn-primary flex-1 text-sm"
                    >
                      Open
                    </button>
                    <button className="btn-outline flex-1 text-sm">
                      Leave
                    </button>
                  </>
                ) : (
                  <button className="btn-primary w-full text-sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Join Community
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No communities found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search terms' : 'Be the first to create a community in your area'}
            </p>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create New Community
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommunityPage