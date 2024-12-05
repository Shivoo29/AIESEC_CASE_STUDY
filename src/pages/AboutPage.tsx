import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const teamMembers = [
 {
   name: "Shivam Kumar Jha",
   image: "/shivam.jpg",
   role: "Team Lead",
   socials: {
     linkedin: "https://www.linkedin.com/in/shivam-kumar-jha-35686a238/",
     github: "https://github.com/Shivoo29",
     twitter: "https://twitter.com/Shivam01866427https://x.com/skj_thinker",
     email: "2004skj@gmail.com"
   }
 },
 {
   name: "Ashish Negi",
   image: "/ashish.jpg",
   role: "Technology Lead",
   socials: {
     linkedin: "https://www.linkedin.com/in/ashish-negi-6754181a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     github: "https://github.com/05Ashish",
     twitter: "https://x.com/AshishN10520427",
     email: "ashish.negi@example.com"
   }
 },
 {
   name: "Ahaann Wadhwa",
   image: "/ahaann.jpg",
   role: "Development Lead",
   socials: {
     linkedin: "https://www.linkedin.com/in/ahaann-wadhwa-741b60311/",
     github: "https://github.com/ahaann",
     twitter: "https://twitter.com/ahaann",
     email: "ahaannwadhwa@gmail.com"
   }
 },
 {
   name: "Vaibhav Jain",
   image: "/vaibhav.jpg",
   role: "Research Lead",
   socials: {
     linkedin: "https://www.linkedin.com/in/vaibhav-jain-879263324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     github: "https://github.com/vaibhavj22-05",
     twitter: "https://x.com/Vaibhavj_26?t=L17HhpO_7GjE61QlNL8ysw&s=09",
     email: "vaibhav646348@gmail.com"
   }
 }
];

export default function AboutPage() {
 const [hoveredMember, setHoveredMember] = useState<string | null>(null);

 return (
   <div className="min-h-screen bg-gray-900 py-24">
     <div className="container mx-auto px-6">
       <div className="flex items-center mb-16">
         <motion.h2 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="text-gray-400 text-xl"
         >
           PlantTech
         </motion.h2>
       </div>

       <motion.h1 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-5xl font-bold text-white mb-16 text-center"
       >
         Meet Our Team
       </motion.h1>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {teamMembers.map((member, index) => (
           <motion.div
             key={member.name}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.2 }}
             className="relative group"
             onMouseEnter={() => setHoveredMember(member.name)}
             onMouseLeave={() => setHoveredMember(null)}
           >
             <div className="overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-lg border border-gray-700 hover:border-neon-magenta transition-colors">
               <img
                 src={member.image}
                 alt={member.name}
                 className="w-full h-64 object-cover transition-transform group-hover:scale-105"
               />
               <div className="p-4">
                 <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                 <p className="text-gray-400">{member.role}</p>
               </div>

               {/* Social Icons */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: hoveredMember === member.name ? 1 : 0 }}
                 className="absolute bottom-4 right-4 flex gap-3"
               >
                 <a 
                   href={member.socials.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-2 bg-gray-800/80 rounded-full hover:bg-neon-magenta/20 hover:text-neon-magenta transition-colors"
                 >
                   <Linkedin className="w-5 h-5" />
                 </a>
                 <a 
                   href={member.socials.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-2 bg-gray-800/80 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
                 >
                   <Github className="w-5 h-5" />
                 </a>
                 <a 
                   href={member.socials.twitter}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-2 bg-gray-800/80 rounded-full hover:bg-neon-green/20 hover:text-neon-green transition-colors"
                 >
                   <Twitter className="w-5 h-5" />
                 </a>
                 <a 
                   href={member.socials.email}
                   className="p-2 bg-gray-800/80 rounded-full hover:bg-neon-red/20 hover:text-neon-red transition-colors"
                 >
                   <Mail className="w-5 h-5" />
                 </a>
               </motion.div>
             </div>
           </motion.div>
         ))}
       </div>

       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1 }}
         className="mt-16 text-center"
       >
         <Link 
           to="https://aiesec-case-study.vercel.app/"
           className="text-gray-400 hover:text-white transition-colors"
           target="_blank"
           rel="noopener noreferrer"
         >
           Team Dynamic Researchers Uniting for Great Solutions (DRUGS)
         </Link>
       </motion.div>
     </div>
   </div>
 );
}