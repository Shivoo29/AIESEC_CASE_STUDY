import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Brain, Cpu, Activity, Signal } from 'lucide-react';

const signalDetectionData = [
  { name: 'Plant Stress', accuracy: 94.3 },
  { name: 'Growth Pattern', accuracy: 92.7 },
  { name: 'Nutrient Deficiency', accuracy: 91.8 },
  { name: 'Disease Prediction', accuracy: 89.5 },
  { name: 'Water Assessment', accuracy: 95.2 }
];

const processingSpeedData = [
  { name: 'Real-time Analysis', speed: 100 },
  { name: 'Batch Processing', speed: 85 },
  { name: 'Alert Generation', speed: 50 },
  { name: 'Data Sync', speed: 200 }
];

const plantTypeAccuracy = [
  { type: 'Row Crops', value: 93.4 },
  { type: 'Fruit Trees', value: 91.2 },
  { type: 'Greenhouse', value: 94.7 },
  { type: 'Indoor Plants', value: 95.1 },
  { type: 'Hydroponic', value: 96.3 }
];

const resourceOptimization = [
  { metric: 'Water Usage', improvement: 32 },
  { metric: 'Fertilizer Usage', improvement: 28 },
  { metric: 'Energy Consumption', improvement: 25 },
  { metric: 'Crop Yield', improvement: 41 },
  { metric: 'Disease Prevention', improvement: 67 }
];

const communicationRange = [
  { type: 'Direct Wi-Fi', range: 100 },
  { type: 'Mesh Network', range: 1200 },
  { type: 'LoRaWAN', range: 10000 },
  { type: 'Bluetooth', range: 50 }
];

export default function TechnologyPage() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-8 text-white">
            Performance Metrics & Technical Specifications
          </h1>
          <p className="text-xl text-gray-400">
            Comprehensive analysis of our plant neural interface system's capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Signal Detection Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <Signal className="w-8 h-8 text-neon-magenta mr-3" />
              <h2 className="text-2xl font-bold text-white">Signal Detection Accuracy</h2>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer>
                <BarChart data={signalDetectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" domain={[80, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Bar dataKey="accuracy" fill="#FF00FF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Processing Speed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <Cpu className="w-8 h-8 text-neon-cyan mr-3" />
              <h2 className="text-2xl font-bold text-white">Processing Speed (ms)</h2>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer>
                <LineChart data={processingSpeedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Line type="monotone" dataKey="speed" stroke="#00CED1" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Plant Type Accuracy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-neon-green mr-3" />
              <h2 className="text-2xl font-bold text-white">Accuracy by Plant Type</h2>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer>
                <RadarChart data={plantTypeAccuracy}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="type" stroke="#9CA3AF" />
                  <PolarRadiusAxis stroke="#9CA3AF" />
                  <Radar
                    name="Accuracy"
                    dataKey="value"
                    stroke="#ADFF2F"
                    fill="#ADFF2F"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Resource Optimization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <Activity className="w-8 h-8 text-neon-red mr-3" />
              <h2 className="text-2xl font-bold text-white">Resource Optimization</h2>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer>
                <BarChart data={resourceOptimization}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Bar dataKey="improvement" fill="#FF2B2B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="text-neon-cyan font-semibold mb-2">Hardware</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Power: 0.8W active, 0.1W standby</li>
                <li>Battery Life: 28 days</li>
                <li>Operating Temp: -25°C to +65°C</li>
                <li>IP Rating: IP67</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="text-neon-magenta font-semibold mb-2">Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Real-time Analysis: &lt;100ms</li>
                <li>Batch Processing: 10,000/minute</li>
                <li>Alert Generation: &lt;50ms</li>
                <li>Data Sync: &lt;200ms</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="text-neon-green font-semibold mb-2">Storage</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Capacity: 64GB local</li>
                <li>Upload Speed: 50Mbps</li>
                <li>Compression: 8:1 ratio</li>
                <li>Retention: 5 years</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}