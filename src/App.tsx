import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import TechnologyPage from './pages/TechnologyPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
