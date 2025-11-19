# Agricultural Revolution Initiative - AIESEC Case Study 🌱

> A groundbreaking initiative in collaboration with AIESEC-IITD and MAIT for revolutionizing plant communication through electromagnetic wave analysis.

## 🚀 Project Overview

The Agricultural Revolution Initiative is a cutting-edge project that combines advanced electromagnetic wave analysis with artificial intelligence to enable direct plant-to-human communication. This project represents a case study implementation demonstrating the potential of modern technology in transforming agricultural practices.

## ✨ Key Features

- 🎥 **Video Popup Integration** - Interactive technology demonstration modal
- 📧 **Email Integration** - Automated email confirmation via EmailJS
- 📜 **Certificate Generation** - Automatic PDF certificates for participants
- 🎨 **Beautiful UI** - Modern design with smooth animations
- 📊 **Data Visualization** - Interactive charts and metrics
- 🔔 **Toast Notifications** - Real-time user feedback
- 🛡️ **Error Boundaries** - Graceful error handling
- 📱 **Fully Responsive** - Works on all devices
- 🎯 **404 Page** - Custom not found page with navigation
- 🔒 **Environment Variables** - Secure configuration management

## 🛠️ Tech Stack

- **Frontend:**
  - React 18 with TypeScript
  - Vite (Lightning-fast build tool)
  - Tailwind CSS (Utility-first CSS)
  - Framer Motion (Animations)
  - Recharts (Data visualization)

- **Communication:**
  - EmailJS (Email service)
  - jsPDF (PDF generation)
  - React Hot Toast (Notifications)

- **Key Libraries:**
  - `lucide-react` - Icon library
  - `react-router-dom` - Client-side routing
  - `react-intersection-observer` - Scroll animations
  - `@emailjs/browser` - Email integration
  - `jspdf` - PDF generation

## 📊 Features Breakdown

### 🏠 Home Page
- Hero section with animated video popup
- Mission, innovation, and sustainability cards
- Feature showcase with 6 key features
- Technology overview with neural interface details

### 👥 About Page
- Team member profiles with social links
- Hover animations and interactive cards
- LinkedIn, GitHub, Twitter, and Email links
- Centralized team data management

### 🔬 Technology Page
- Real-time signal detection metrics
- Interactive charts (Bar, Line, Radar)
- Processing speed analysis
- Plant type accuracy reports
- Resource optimization statistics
- Technical specifications display

### ✨ Features Page
- 6 detailed feature cards
- Modal interactions
- Feature benefits and descriptions

### 📝 Join Page
- Interactive registration form with validation
- Role-based application system (Researcher, Farmer, Investor, Other)
- **Automated certificate generation** (PDF download)
- **Email confirmation with certificate attachment**
- Loading states and error handling
- Toast notifications for user feedback

### ❌ 404 Page
- Custom not found page
- Animated error message
- Navigation back to home

## 🏗️ Project Structure

```
AIESEC_CASE_STUDY/
├── src/
│   ├── components/
│   │   ├── About.tsx               # About section
│   │   ├── ErrorBoundary.tsx       # Error handling
│   │   ├── FeatureCard.tsx         # Reusable feature cards
│   │   ├── Features.tsx            # Features section
│   │   ├── Hero.tsx                # Hero with video popup
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── Technology.tsx          # Technology showcase
│   │   └── VideoPopup.tsx          # YouTube video modal
│   ├── data/
│   │   └── team.ts                 # Team member data
│   ├── pages/
│   │   ├── AboutPage.tsx           # Team page
│   │   ├── FeaturesPage.tsx        # Features page
│   │   ├── HomePage.tsx            # Landing page
│   │   ├── JoinPage.tsx            # Registration with EmailJS & PDF
│   │   ├── NotFoundPage.tsx        # 404 page
│   │   └── TechnologyPage.tsx      # Technology page
│   ├── App.tsx                     # Main app with routing
│   ├── main.tsx                    # Entry point with ErrorBoundary
│   └── index.css                   # Global styles
├── docs/
│   ├── EMAILJS_SETUP.md            # EmailJS configuration guide
│   ├── BACKEND_SETUP.md            # Backend implementation guide
│   └── DEPLOYMENT.md               # Deployment instructions
├── public/                         # Static assets
├── .env                            # Environment variables (gitignored)
├── .env.example                    # Environment template
└── package.json                    # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- EmailJS account (for form submission)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Shivoo29/AIESEC_CASE_STUDY.git
cd AIESEC_CASE_STUDY
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your EmailJS credentials
# Get these from https://www.emailjs.com/
```

**.env file:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_YOUTUBE_VIDEO_ID=dQw4w9WgXcQ
```

4. **Configure EmailJS:**

See detailed guide: [docs/EMAILJS_SETUP.md](docs/EMAILJS_SETUP.md)

Quick steps:
- Create account at [emailjs.com](https://www.emailjs.com/)
- Add email service (Gmail/Outlook)
- Create email template
- Copy Service ID, Template ID, and Public Key to `.env`

5. **Start the development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

6. **Build for production:**
```bash
npm run build
```

7. **Preview production build:**
```bash
npm run preview
```

## 📈 Performance Metrics

Our system achieves:
- 🎯 Signal Detection Accuracy: **94.3%**
- ⚡ Processing Speed: **<100ms**
- 💡 Resource Optimization: Up to **67%** improvement
- 🌿 Plant Type Recognition: **95.1%** accuracy
- 📊 Data Visualization: Real-time charts and metrics
- 📱 Mobile Responsiveness: **100%** compatible

## 📚 Documentation

- **[EmailJS Setup Guide](docs/EMAILJS_SETUP.md)** - Configure email service for form submissions
- **[Backend Setup Guide](docs/BACKEND_SETUP.md)** - Implement a custom backend (Node.js, Python, etc.)
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Deploy to Vercel, Netlify, Railway, and more

## 🚀 Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Shivoo29/AIESEC_CASE_STUDY)

### Manual Deployment

See our comprehensive [Deployment Guide](docs/DEPLOYMENT.md) for:
- Vercel deployment
- Netlify deployment
- Custom domain setup
- Environment variable configuration
- CI/CD pipeline setup

### Environment Variables for Production

Make sure to set these in your deployment platform:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_YOUTUBE_VIDEO_ID=your_video_id
```

## 🧪 Testing

Run the project locally:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Test form submission (requires EmailJS setup)
# Navigate to /join and submit the form
```

## 🐛 Troubleshooting

### Common Issues

**EmailJS not working:**
- Verify your `.env` file has correct credentials
- Check EmailJS dashboard for quota limits (200 emails/month on free plan)
- Ensure email service is connected and verified

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Environment variables not loading:**
- Restart dev server after changing `.env`
- Ensure variable names start with `VITE_`
- Check `.env` file is in project root

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain consistent code formatting
- Write meaningful commit messages
- Test your changes before submitting PR

## 📄 License

This project is part of AIESEC case study implementation. All rights reserved.

## 👥 Team

**Dynamic Researchers Uniting for Great Solutions (DRUGS)**

- **Shivam Kumar Jha** - Team Lead - [LinkedIn](https://www.linkedin.com/in/shivam-kumar-jha-35686a238/) | [GitHub](https://github.com/Shivoo29)
- **Ashish Negi** - Technology Lead - [LinkedIn](https://www.linkedin.com/in/ashish-negi-6754181a0) | [GitHub](https://github.com/05Ashish)
- **Vaibhav Jain** - Research Lead - [LinkedIn](https://www.linkedin.com/in/vaibhav-jain-879263324) | [GitHub](https://github.com/vaibhavj22-05)
- **Ahaann Wadhwa** - Development Lead - [LinkedIn](https://www.linkedin.com/in/ahaann-wadhwa-741b60311/) | [GitHub](https://github.com/ahaann)

## 🙏 Acknowledgments

- **AIESEC-IITD** - For the incredible opportunity and support
- **MAIT** - For collaboration and resources
- **EDC (Entrepreneurship Development Cell)** - For guidance and mentorship
- All contributors and supporters of this initiative

## 📞 Contact & Support

- **Project Repository:** [github.com/Shivoo29/AIESEC_CASE_STUDY](https://github.com/Shivoo29/AIESEC_CASE_STUDY)
- **Email:** 2004skj@gmail.com
- **Issues:** [Open an issue](https://github.com/Shivoo29/AIESEC_CASE_STUDY/issues)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you or you find it interesting!

---

<div align="center">

### Made with 💚 by Team DRUGS

*Revolutionizing agriculture, one plant at a time*

**[Visit Live Demo](#) | [Documentation](docs/) | [Report Bug](https://github.com/Shivoo29/AIESEC_CASE_STUDY/issues) | [Request Feature](https://github.com/Shivoo29/AIESEC_CASE_STUDY/issues)**

</div>
