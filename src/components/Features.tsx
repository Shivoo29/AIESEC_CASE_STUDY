import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Activity, TestTube, Smartphone, Database } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Advanced Plant-to-Human Communication',
    description: 'Real-time signal detection and processing with multi-spectrum electromagnetic wave analysis for direct plant stress monitoring.',
    icon: 'Brain',
    benefits: [
      'Real-time signal detection',
      'Multi-spectrum analysis',
      'Direct stress monitoring',
      'Instant notifications'
    ]
  },
  {
    title: 'Powerful AI-Driven Analytics',
    description: 'Leverage advanced artificial intelligence for growth prediction, disease prevention, and resource optimization.',
    icon: 'Cpu',
    benefits: [
      'Growth pattern prediction',
      'Disease early warning',
      'Resource forecasting',
      'Automated recommendations'
    ]
  },
  {
    title: 'Complete Plant Health Insights',
    description: 'Comprehensive monitoring system tracking environmental conditions, nutrient uptake, and growth rates.',
    icon: 'Activity',
    benefits: [
      'Environmental tracking',
      'Nutrient analysis',
      'Water optimization',
      'Growth monitoring'
    ]
  },
  {
    title: 'Advanced Research Capabilities',
    description: 'Professional-grade tools for data collection, analysis, and visualization to support scientific research.',
    icon: 'TestTube',
    benefits: [
      'Data collection tools',
      'Experimental design',
      'Statistical analysis',
      'Research visualization'
    ]
  },
  {
    title: 'Control at Your Fingertips',
    description: 'Access your plant monitoring system anywhere with our powerful mobile integration.',
    icon: 'Smartphone',
    benefits: [
      'Mobile notifications',
      'Remote monitoring',
      'User-friendly interface',
      'Cross-platform support'
    ]
  },
  {
    title: 'Secure Data Management',
    description: 'Enterprise-grade security with cloud storage and advanced encryption for all your plant data.',
    icon: 'Database',
    benefits: [
      'Cloud storage',
      'Advanced encryption',
      'Easy data export',
      'Historical analysis'
    ]
  }
];

const iconComponents = {
  Brain,
  Cpu,
  Activity,
  TestTube,
  Smartphone,
  Database
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Revolutionizing Plant Communication Through Advanced Technology
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our Plant Neural Interface System transforms agricultural monitoring and optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              IconComponent={iconComponents[feature.icon as keyof typeof iconComponents]}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan hover:bg-neon-cyan/30 transition-colors"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}