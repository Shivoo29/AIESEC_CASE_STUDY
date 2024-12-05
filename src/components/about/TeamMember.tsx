import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  image: string;
  role: string;
  index: number;
}

export default function TeamMember({ name, image, role, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
}