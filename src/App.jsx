import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ProfilePage from './pages/ProfilePage'
import CommunityPage from './pages/CommunityPage'
import LeadsPage from './pages/LeadsPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/communities" element={<CommunityPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/:communityName" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App