// src/components/VideoPopup.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoPopupProps {
 isOpen: boolean;
 onClose: () => void;
 videoId: string;
}

export default function VideoPopup({ isOpen, onClose, videoId }: VideoPopupProps) {
 return (
   <AnimatePresence>
     {isOpen && (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
         onClick={onClose}
       >
         <motion.div
           initial={{ scale: 0.5 }}
           animate={{ scale: 1 }}
           exit={{ scale: 0.5 }}
           className="relative w-full max-w-4xl p-4"
           onClick={e => e.stopPropagation()}
         >
           <button
             onClick={onClose}
             className="absolute -top-2 -right-2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
           >
             <X className="w-6 h-6" />
           </button>
           
           <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
             <iframe
               className="absolute top-0 left-0 w-full h-full"
               src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             />
           </div>
         </motion.div>
       </motion.div>
     )}
   </AnimatePresence>
 );
}

// Usage in Hero.tsx:
import { useState } from 'react';
import VideoPopup from './VideoPopup';

export default function Hero() {
 const [isVideoOpen, setIsVideoOpen] = useState(false);

 return (
   <>
     <button 
       onClick={() => setIsVideoOpen(true)}
       className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
     >
       Discover the Technology
     </button>

     <VideoPopup
       isOpen={isVideoOpen}
       onClose={() => setIsVideoOpen(false)}
       videoId="YOUR_YOUTUBE_VIDEO_ID"
     />
   </>
 );
}