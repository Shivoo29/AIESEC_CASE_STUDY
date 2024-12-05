// src/pages/FeaturesPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, LineChart, Shield, Cloud, Share2 } from 'lucide-react';

const features = [
 {
   icon: Brain,
   title: "Neural Interface Technology",
   description: "Revolutionary plant-to-human communication using advanced electromagnetic wave analysis",
   color: "text-neon-magenta"
 },
 {
   icon: Zap,
   title: "Real-Time Processing",
   description: "Sub-100ms response time with high-accuracy signal detection and interpretation",
   color: "text-neon-cyan"
 },
 {
   icon: LineChart,
   title: "Advanced Analytics",
   description: "Comprehensive data analysis with AI-powered insights for optimal plant care",
   color: "text-neon-green"
 },
 {
   icon: Shield,
   title: "Reliable Performance",
   description: "99.97% uptime with enterprise-grade security and data protection",
   color: "text-neon-red"
 },
 {
   icon: Cloud,
   title: "Cloud Integration",
   description: "Seamless cloud storage with 64GB local capacity and 50Mbps upload speed",
   color: "text-neon-yellow"
 },
 {
   icon: Share2,
   title: "Research Collaboration",
   description: "Partner with leading institutions to advance agricultural technology",
   color: "text-neon-purple"
 }
];

export default function FeaturesPage() {
 return (
   <div className="min-h-screen bg-gray-900 py-24">
     <div className="container mx-auto px-6">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-center mb-16"
       >
         <h1 className="text-5xl font-bold text-white mb-6">
           Revolutionary Features
         </h1>
         <p className="text-xl text-gray-400 max-w-3xl mx-auto">
           Discover how our plant neural interface system is transforming agricultural technology
         </p>
       </motion.div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {features.map((feature, index) => (
           <motion.div
             key={feature.title}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.1 }}
             className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700 hover:border-gray-500 transition-colors"
           >
             <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
             <h3 className="text-xl font-bold text-white mb-2">
               {feature.title}
             </h3>
             <p className="text-gray-400">
               {feature.description}
             </p>
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="mt-4"
             >
               <button className={`px-4 py-2 rounded-full bg-gray-700/50 ${feature.color} text-sm`}>
                 Learn More
               </button>
             </motion.div>
           </motion.div>
         ))}
       </div>

       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.8 }}
         className="mt-16 text-center"
       >
         <button className="px-8 py-4 rounded-full bg-neon-magenta/20 text-neon-magenta border border-neon-magenta hover:bg-neon-magenta/30 transition-colors">
           Explore All Features
         </button>
       </motion.div>
     </div>
   </div>
 );
}