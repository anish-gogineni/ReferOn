import { useState } from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Calendar, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
  MessageCircle,
  Star,
  Target,
  Award
} from 'lucide-react'

const LeadsPage = () => {
  const [activeTab, setActiveTab] = useState('received')
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data for leads
  const leads = [
    {
      id: 1,
      type: 'received',
      title: 'Web Development for Retail Store',
      description: 'Local retail store needs e-commerce website with inventory management',
      source: 'Priya Sharma',
      sourceBusiness: 'Sharma Consultancy',
      community: 'HyderabadMSMEs',
      value: '₹2,50,000',
      status: 'active',
      priority: 'high',
      date: '2024-01-15',
      timeAgo: '2 days ago',
      clientName: 'Fashion Central',
      clientContact: '+91 98765 43210',
      notes: 'Client is looking for quick turnaround - 4 weeks timeline',
      followUpRequired: true
    },
    {
      id: 2,
      type: 'given',
      title: 'Digital Marketing Services',
      description: 'Small business needs social media marketing and SEO services',
      recipient: 'Mohammed Ali',
      recipientBusiness: 'Digital Growth Agency',
      community: 'TechStartupsBangalore',
      value: '₹75,000',
      status: 'converted',
      priority: 'medium',
      date: '2024-01-10',
      timeAgo: '1 week ago',
      clientName: 'Green Kitchen',
      feedback: 'Excellent service! Client very satisfied with results.',
      rating: 5
    },
    {
      id: 3,
      type: 'received',
      title: 'Mobile App Development',
      description: 'Healthcare startup needs cross-platform mobile application',
      source: 'Dr. Rajesh Kumar',
      sourceBusiness: 'HealthTech Solutions',
      community: 'WomenEntrepreneurs',
      value: '₹5,00,000',
      status: 'pending',
      priority: 'high',
      date: '2024-01-18',
      timeAgo: '1 hour ago',
      clientName: 'MediCare Plus',
      clientContact: '+91 87654 32109',
      notes: 'Initial discussion scheduled for tomorrow',
      followUpRequired: false
    },
    {
      id: 4,
      type: 'given',
      title: 'Accounting Software Setup',
      description: 'Manufacturing company needs QuickBooks setup and training',
      recipient: 'Kavya Reddy',
      recipientBusiness: 'FinTech Consultants',
      community: 'ReddyBusinessOwners',
      value: '₹45,000',
      status: 'rejected',
      priority: 'low',
      date: '2024-01-05',
      timeAgo: '2 weeks ago',
      clientName: 'Steel Works Ltd',
      notes: 'Client decided to go with in-house solution'
    }
  ]

  const filteredLeads = leads.filter(lead => {
    const matchesTab = activeTab === 'all' || lead.type === activeTab
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
    const matchesSearch = 
      lead.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesTab && matchesStatus && matchesSearch
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <AlertCircle className="h-4 w-4 text-blue-500" />
      case 'converted': return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'rejected': return <XCircle className="h-4 w-4 text-red-500" />
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800'
      case 'converted': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Management</h1>
          <p className="text-gray-600">
            Track and manage all your referrals in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">+12% from last month</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">68%</p>
              </div>
              <Target className="h-8 w-8 text-secondary-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">+5% from last month</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">₹12.5L</p>
              </div>
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">+23% from last month</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Referrals</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-xs text-blue-600 mt-2">Pending follow-up</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {[
                { id: 'all', label: 'All Leads' },
                { id: 'received', label: 'Received' },
                { id: 'given', label: 'Given' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field w-auto"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="converted">Converted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Lead
            </button>
          </div>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <div key={lead.id} className="card hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {lead.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(lead.status)}
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(lead.priority)}`}>
                            {lead.priority.charAt(0).toUpperCase() + lead.priority.slice(1)} Priority
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{lead.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-700">
                              {lead.type === 'received' ? 'Referred by:' : 'Referred to:'}
                            </span>
                            <span className="text-gray-600">
                              {lead.type === 'received' ? lead.source : lead.recipient}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-700">Business:</span>
                            <span className="text-gray-600">
                              {lead.type === 'received' ? lead.sourceBusiness : lead.recipientBusiness}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-700">Community:</span>
                            <span className="text-primary-600">{lead.community}</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-700">Client:</span>
                            <span className="text-gray-600">{lead.clientName}</span>
                          </div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-700">Value:</span>
                            <span className="text-gray-900 font-semibold">{lead.value}</span>
                          </div>
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">{lead.timeAgo}</span>
                          </div>
                        </div>
                      </div>

                      {lead.notes && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Notes:</span> {lead.notes}
                          </p>
                        </div>
                      )}

                      {lead.feedback && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-green-800">Feedback:</span>
                            {lead.rating && (
                              <div className="flex items-center">
                                {[...Array(lead.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-green-700">{lead.feedback}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:ml-6">
                  {lead.type === 'received' && lead.status === 'active' && (
                    <>
                      <button className="btn-primary text-sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Contact Client
                      </button>
                      <button className="btn-outline text-sm">
                        Update Status
                      </button>
                    </>
                  )}
                  
                  {lead.type === 'received' && lead.status === 'pending' && (
                    <>
                      <button className="btn-primary text-sm">
                        Accept Lead
                      </button>
                      <button className="btn-secondary text-sm">
                        Decline
                      </button>
                    </>
                  )}

                  {lead.type === 'given' && lead.status === 'converted' && (
                    <button className="btn-outline text-sm">
                      <Star className="h-4 w-4 mr-1" />
                      Rate Service
                    </button>
                  )}

                  {lead.followUpRequired && (
                    <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      Follow-up required
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No leads found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search or filters' : 'Start by joining communities and sharing referrals'}
            </p>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Lead
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LeadsPage