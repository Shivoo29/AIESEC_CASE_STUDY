import { motion } from 'framer-motion';
import { Cpu, Network, CircuitBoard } from 'lucide-react';

export default function Technology() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#FF2B2B] via-[#FF00FF] to-[#00CED1] opacity-20 absolute inset-0 blur-3xl" />
            <div className="relative flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8">
                <Cpu className="w-24 h-24 text-[#FF00FF]" />
                <Network className="w-24 h-24 text-[#00CED1]" />
                <CircuitBoard className="w-24 h-24 text-[#ADFF2F]" />
                <Network className="w-24 h-24 text-[#FF2B2B] rotate-180" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Neural Interface Technology
            </h2>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-[#FF00FF]">
                  Quantum Sensing
                </h3>
                <p className="text-gray-300">
                  Advanced quantum sensors detect minute electromagnetic changes in plant tissue.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-[#00CED1]">
                  Neural Mapping
                </h3>
                <p className="text-gray-300">
                  Proprietary algorithms create detailed maps of plant neural networks.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-[#ADFF2F]">
                  Real-time Analysis
                </h3>
                <p className="text-gray-300">
                  Continuous monitoring and analysis of plant health and growth patterns.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}