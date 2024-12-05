import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  fundingAmount: string;
  message: string;
}

export default function JoinPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    role: '',
    fundingAmount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for joining! Check your email for the confirmation and emblem.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-8 text-white text-center">
          Join the Agricultural Revolution
        </h1>
        <p className="text-xl text-gray-400 mb-16 text-center">
          Be part of the future of agriculture and help us revolutionize plant communication
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6 p-8 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              >
                <option value="">Select a role</option>
                <option value="researcher">Researcher</option>
                <option value="farmer">Farmer</option>
                <option value="investor">Investor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-300 mb-2">
                Funding Amount (Optional)
              </label>
              <input
                type="number"
                id="fundingAmount"
                name="fundingAmount"
                value={formData.fundingAmount}
                onChange={handleChange}
                placeholder="Enter amount in USD"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                placeholder="Tell us how you'd like to contribute..."
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-4 rounded-full bg-neon-magenta/20 text-neon-magenta border border-neon-magenta hover:bg-neon-magenta/30 transition-colors"
          >
            Submit Application
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}