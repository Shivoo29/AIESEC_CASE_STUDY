import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
  IconComponent: LucideIcon;
}

export default function FeatureCard({ feature, index, IconComponent }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-neon-cyan transition-colors group"
    >
      <div className="flex items-center mb-4">
        <IconComponent className="w-8 h-8 text-neon-cyan group-hover:text-neon-magenta transition-colors" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
      <p className="text-gray-400 mb-4">{feature.description}</p>
      <ul className="space-y-2">
        {feature.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mr-2" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}