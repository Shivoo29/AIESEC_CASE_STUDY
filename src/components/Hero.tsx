import { motion } from 'framer-motion';
import { Brain, Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, #FF2B2B22 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, #FF00FF22 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, #00CED122 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2B2B] via-[#FF00FF] to-[#00CED1]">
            The Future of Plant Communication
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Revolutionary Neural Interface Technology for Agricultural Excellence
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <Waves className="w-12 h-12 text-[#FF00FF] animate-pulse" />
            <Brain className="w-12 h-12 text-[#00CED1] animate-pulse" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold rounded-full bg-[#FF2B2B] text-white shadow-[0_0_15px_rgba(255,43,43,0.5)] hover:shadow-[0_0_30px_rgba(255,43,43,0.8)] transition-shadow"
          >
            Discover the Technology
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}