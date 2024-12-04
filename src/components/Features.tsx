import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Cpu, LineChart, Zap } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Real-time Monitoring',
    description: 'Advanced sensors provide continuous plant health monitoring',
    icon: 'Activity'
  },
  {
    title: 'AI Analysis',
    description: 'Machine learning algorithms for predictive insights',
    icon: 'Brain'
  },
  {
    title: 'EM Wave Detection',
    description: 'Multi-spectrum electromagnetic wave analysis',
    icon: 'Zap'
  },
  {
    title: 'Growth Modeling',
    description: 'Predictive modeling for optimal plant development',
    icon: 'LineChart'
  },
  {
    title: 'Resource Optimization',
    description: 'Smart resource management and allocation',
    icon: 'Cpu'
  }
];

const iconComponents = {
  Activity,
  Brain,
  Zap,
  LineChart,
  Cpu
};

export default function Features() {
  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? <IconComponent className="w-8 h-8 text-[#ADFF2F]" /> : null;
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-[#00CED1] transition-colors"
            >
              <div className="flex items-center mb-4">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}