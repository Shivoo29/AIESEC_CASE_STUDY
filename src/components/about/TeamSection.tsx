import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import { teamMembers } from '../../data/team';

export default function TeamSection() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-8 text-white">Meet Our Team</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          The brilliant minds behind PlantTech's revolutionary plant communication technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={member.name}
            {...member}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}