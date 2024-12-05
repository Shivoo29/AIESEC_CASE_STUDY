import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Technology from '../components/Technology';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Technology />
    </>
  );
}