import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex justify-center mb-8"
        >
          <AlertTriangle className="w-24 h-24 text-[#FF2B2B]" />
        </motion.div>

        <motion.h1
          className="text-8xl md:text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2B2B] via-[#FF00FF] to-[#00CED1]"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          404
        </motion.h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital wilderness.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-[#FF2B2B] text-white shadow-[0_0_15px_rgba(255,43,43,0.5)] hover:shadow-[0_0_30px_rgba(255,43,43,0.8)] transition-shadow"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </motion.button>

        <div className="mt-12 flex justify-center gap-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            className="w-3 h-3 rounded-full bg-[#FF2B2B]"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="w-3 h-3 rounded-full bg-[#FF00FF]"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            className="w-3 h-3 rounded-full bg-[#00CED1]"
          />
        </div>
      </motion.div>
    </div>
  );
}
