// src/pages/ConstructionPage.tsx
import { motion } from 'framer-motion';
import { Cog, Hammer, Wrench } from 'lucide-react';

export default function ConstructionPage() {
 return (
   <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
     <div className="relative z-10">
       <motion.div 
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-center"
       >
         <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-green">
           Under Construction
         </h1>
         
         <div className="flex justify-center gap-8 mb-12">
           <motion.div
             animate={{ 
               rotate: 360,
               transition: { duration: 4, repeat: Infinity, ease: "linear" }
             }}
           >
             <Cog className="w-16 h-16 text-neon-magenta" />
           </motion.div>
           
           <motion.div
             animate={{ 
               y: [-10, 10],
               transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
             }}
           >
             <Hammer className="w-16 h-16 text-neon-cyan" />
           </motion.div>
           
           <motion.div
             animate={{ 
               rotate: [-45, 45],
               transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
             }}
           >
             <Wrench className="w-16 h-16 text-neon-green" />
           </motion.div>
         </div>

         <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="text-xl text-gray-400 mb-8"
         >
           Something amazing is being built...
         </motion.p>

         <motion.div
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="h-2 bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-green rounded-full w-64 mx-auto"
         />
       </motion.div>
     </div>

     {/* Animated background */}
     <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-10">
       {Array.from({ length: 64 }).map((_, i) => (
         <motion.div
           key={i}
           initial={{ opacity: 0 }}
           animate={{ opacity: [0.3, 1, 0.3] }}
           transition={{
             duration: 2,
             repeat: Infinity,
             delay: i * 0.1,
             repeatType: "reverse"
           }}
           className="bg-white rounded-full"
         />
       ))}
     </div>
   </div>
 );
}