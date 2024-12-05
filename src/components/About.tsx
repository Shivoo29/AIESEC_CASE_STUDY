import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, BrainCircuit, LeafyGreen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Revolutionizing Plant Science
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're pioneering the future of agriculture through groundbreaking neural interface technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-gray-800 border border-gray-700"
          >
            <Sprout className="w-12 h-12 text-neon-cyan mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
            <p className="text-gray-400">
              To bridge the gap between technology and nature, enabling sustainable agriculture through advanced plant communication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-gray-800 border border-gray-700"
          >
            <BrainCircuit className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
            <p className="text-gray-400">
              Leading the field with patented neural interface technology that revolutionizes how we understand and interact with plants.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl bg-gray-800 border border-gray-700"
          >
            <LeafyGreen className="w-12 h-12 text-neon-magenta mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Sustainability</h3>
            <p className="text-gray-400">
              Committed to developing eco-friendly solutions that enhance agricultural productivity while preserving our planet.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Join the Agricultural Revolution
            </h3>
            <p className="text-gray-400 mb-6">
              Be part of the next generation of farming technology. Our solutions are helping farmers worldwide achieve unprecedented levels of efficiency and sustainability.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan hover:bg-neon-cyan/30 transition-colors"
            >
              Learn More About Our Impact
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}