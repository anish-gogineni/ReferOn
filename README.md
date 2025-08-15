# ReferOn

A platform for business owners to connect, share referrals, and grow through trusted networks.

## 🚀 Overview

ReferOn combines the simplicity of WhatsApp with the structure of a CRM, designed specifically for local business networks and referral sharing.

### Key Features

- **Profile Creation**: Business owners can create detailed profiles defining their ideal customer persona
- **Community Groups**: Join or create communities with URLs like `ReferOn.app/HyderabadMSMEs`
- **Lead Tracking**: Record and acknowledge every referral with complete transparency
- **Trust-Based Network**: Closed network approach encouraging quality connections over spam

## 🎯 Vision

Make ReferOn the go-to lead management and sharing tool for local networks, allowing non-technical users (shop owners, service providers, consultants) to grow via referrals.

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router
- **Development**: Modern ES6+ with hot reload

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ReferOn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features Implemented

### ✅ Landing Page
- Hero section with compelling value proposition
- Feature highlights with icons and descriptions
- Community examples (HyderabadMSMEs, ReddyBusinessOwners, etc.)
- Customer testimonials
- Call-to-action sections

### ✅ Business Profile
- Comprehensive profile creation/editing
- Contact information management
- Ideal customer persona definition
- Services and target industries
- Profile completion tracking

### ✅ Community Groups
- Community discovery and browsing
- Individual community pages with activity feeds
- Member statistics and engagement metrics
- URL-based community access (e.g., /HyderabadMSMEs)
- Join/leave community functionality

### ✅ Lead Management
- Comprehensive lead tracking dashboard
- Separate views for received and given referrals
- Status tracking (pending, active, converted, rejected)
- Lead search and filtering
- Performance analytics
- Follow-up management

### ✅ Navigation & UX
- Responsive navigation with mobile menu
- Consistent design system with Tailwind CSS
- Modern UI components and interactions
- Mobile-first responsive design

## 🎨 Design System

The application uses a modern design system built with Tailwind CSS:

- **Colors**: Primary blue palette with secondary green accents
- **Typography**: Inter font family for clean readability
- **Components**: Consistent button styles, cards, and form elements
- **Icons**: Lucide React icons throughout the interface
- **Responsive**: Mobile-first approach with breakpoint-specific layouts

## 🔄 Current Status

This is the initial **look and feel** implementation focusing on:
- ✅ Complete UI/UX design
- ✅ Responsive layouts
- ✅ Component structure
- ✅ Navigation flow
- ✅ Mock data and interactions

## 🚧 Next Steps (Backend Integration)

- User authentication and authorization
- Database schema for users, communities, and leads
- Real-time chat functionality
- Email notifications and follow-ups
- Analytics and reporting
- Mobile app development

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.jsx      # Navigation component
├── pages/              # Main application pages
│   ├── LandingPage.jsx # Homepage
│   ├── ProfilePage.jsx # Business profile
│   ├── CommunityPage.jsx # Communities
│   └── LeadsPage.jsx   # Lead management
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── App.jsx             # Main application component
├── App.css             # Application styles
├── index.css           # Global styles with Tailwind
└── main.jsx            # Application entry point
```

## 🤝 Contributing

This is a private project. For any questions or suggestions, please reach out to the development team.

## 📄 License

Private - All rights reserved.