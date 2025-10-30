import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const fullText = "We help our clients to shine online";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Show description after typing is complete
        setTimeout(() => setShowDescription(true), 500);
      }
    }, 80); // Faster typing speed
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white transition-colors duration-300 relative">
      <div className="max-w-7xl w-full px-8 md:px-12 lg:px-20 mx-auto">
        {/* QClay Style About Section - 40/60 Split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left Side - Text Content (40% width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] space-y-8">
            
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                What About <br />
                <span className="font-medium">QClay?</span>
              </h2>
            </div>
          </motion.div>

          {/* Right Side - Single Large Card (60% width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-[60%] relative">
            
            {/* Main Card - Single Card Design */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 lg:p-16 shadow-2xl overflow-hidden min-h-[600px]">
              
              {/* 3D Pebble-like Shapes - Enhanced Design */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Large Pebble 1 - Top Right */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, -15, 0]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-12 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/80 to-blue-300/80 rounded-full shadow-lg"
                  style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    filter: 'blur(0.5px)'
                  }}>
                </motion.div>
                
                {/* Medium Pebble 2 - Center Right */}
                <motion.div
                  animate={{
                    rotate: [0, -180, -360],
                    y: [0, -25, 0],
                    scale: [1, 1.2, 1],
                    x: [0, 15, 0]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-20 right-12 w-20 h-20 bg-gradient-to-br from-purple-200/70 to-purple-300/70 rounded-full shadow-lg"
                  style={{
                    borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
                    filter: 'blur(0.5px)'
                  }}>
                </motion.div>
                
                {/* Small Pebble 3 - Top Center */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    x: [0, -15, 0],
                    y: [0, 10, 0]
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-16 right-40 w-16 h-16 bg-gradient-to-br from-blue-100/90 to-purple-200/90 rounded-full shadow-lg"
                  style={{
                    borderRadius: '50% 30% 50% 70% / 30% 50% 70% 50%',
                    filter: 'blur(0.5px)'
                  }}>
                </motion.div>
                
                {/* Medium Pebble 4 - Bottom Right */}
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -90, -180, -270, -360],
                    scale: [1, 1.1, 1],
                    x: [0, -10, 0]
                  }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-32 right-48 w-18 h-18 bg-gradient-to-br from-purple-100/80 to-blue-200/80 rounded-full shadow-lg"
                  style={{
                    borderRadius: '30% 70% 40% 60% / 70% 40% 60% 30%',
                    filter: 'blur(0.5px)'
                  }}>
                </motion.div>
                
                {/* Small Pebble 5 - Center */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 360],
                    x: [0, 8, 0],
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-24 right-28 w-12 h-12 bg-gradient-to-br from-blue-50/95 to-purple-100/95 rounded-full shadow-lg"
                  style={{
                    borderRadius: '60% 40% 50% 50% / 40% 60% 50% 50%',
                    filter: 'blur(0.5px)'
                  }}>
                </motion.div>
                
                {/* Large Pebble 6 - Bottom Center */}
                <motion.div
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.15, 1],
                    x: [0, -20, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-40 right-32 w-22 h-22 bg-gradient-to-br from-purple-50/85 to-blue-100/85 rounded-full shadow-lg"
                  style={{
                    borderRadius: '70% 30% 60% 40% / 30% 70% 40% 60%',
                    filter: 'blur(0.5px)'
                  }}>
                </motion.div>
              </div>

              {/* Card Content - Centered Layout */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="space-y-8 text-center">
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight min-h-[120px] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.span
                      className="relative bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {displayedText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ 
                          duration: 0.8, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="ml-1 text-blue-500 font-bold"
                      >
                        |
                      </motion.span>
                    </motion.span>
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: showDescription ? 1 : 0, y: showDescription ? 0 : 30 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: showDescription ? 0.2 : 0,
                      ease: "easeOut"
                    }}
                    className="relative"
                  >
                    <motion.p 
                      className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: showDescription ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: showDescription ? 0.4 : 0 }}
                    >
                      We collaborate as a collective of individuals bringing their whole self to a project and, together, create work that none of us would be able to do on our own.
                    </motion.p>
                    
                    {/* Animated background highlight */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 rounded-2xl blur-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: showDescription ? 1 : 0.8, 
                        opacity: showDescription ? 1 : 0 
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: showDescription ? 0.6 : 0,
                        ease: "easeOut"
                      }}
                    />
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}