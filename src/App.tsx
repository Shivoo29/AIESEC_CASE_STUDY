import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <Technology />
    </div>
  );
}

export default App;