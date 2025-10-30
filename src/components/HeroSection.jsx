import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function HeroSection() {
  const { isDarkMode } = useTheme();

  return (
    <section id="home" className="h-[60vh] bg-white dark:bg-white flex items-center relative overflow-hidden">
      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-gray-800 dark:bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: isDarkMode ? '0 0 6px rgba(255, 255, 255, 0.8)' : '0 0 6px rgba(0, 0, 0, 0.3)'
            }}>
          </motion.div>
        ))}

        {/* Larger Glowing Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}>
          </motion.div>
        ))}

        {/* Twinkling Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            animate={{
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            className="absolute text-yellow-600 dark:text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: '8px'
            }}>
            ✦
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl w-full px-8 md:px-12 lg:px-20 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.2] md:leading-[1.15] tracking-normal mb-8 text-gray-900 dark:text-white">
              Creative developer crafting modern,<br />
              <span className="font-medium">user-friendly web experiences</span><br />
              that inspire and engage.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Scalable. Secure. Smart.
Web apps built with Java, Spring Boot & React.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase mb-8">
              JAVA / SPRING BOOT / ANGULAR / REACT / AWS / SQL / MICROSERVICES / CI-CD
            </motion.div>
          </div>

          {/* Right Side - Animated Eye Logo */}
          <div className="hidden lg:flex items-center justify-end lg:-mr-48 lg:-mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer group">

              {/* Main Circle Container */}
              <motion.div
                className="w-10 h-10 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full shadow-md relative overflow-hidden group/logo"
                whileHover={{
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)",
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.3 }}>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full backdrop-blur-sm z-10">

                  {/* Animated Ripple Effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0.8 }}
                    whileHover={{
                      scale: [0, 1.2, 1.5],
                      opacity: [0.8, 0.4, 0],
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                    className="absolute inset-0 bg-purple-300/30 rounded-full"
                  />

                  {/* Pulsing Ring */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{
                      scale: [1, 1.1, 1.2],
                      opacity: [0, 0.6, 0],
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="absolute inset-0 border-2 border-purple-300/50 rounded-full"
                  />
                </motion.div>

                {/* Scrolling Text Around Border */}
                <motion.div
                  animate={{ rotate: -360 }}
                  whileHover={{
                    rotate: [-360, -720],
                    transition: { duration: 8, ease: "linear" }
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 112 112">
                    <defs>
                      <path
                        id="circle-path"
                        d="M 56, 56 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                      />
                    </defs>
                    <text className="text-[8px] fill-purple-400 dark:fill-purple-300 font-bold tracking-[0.15em]">
                      <textPath href="#circle-path" startOffset="0%">
                        SCROLL • SCROLL • SCROLL • SCROLL •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Animated Eye */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Eye Shape */}
                    <motion.div
                      animate={{
                        scaleY: [1, 0.1, 1],
                      }}
                      whileHover={{
                        scaleY: [1, 0.05, 1],
                        scaleX: [1, 1.1, 1],
                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.1, 0.2]
                      }}
                      className="w-16 h-8 lg:w-20 lg:h-10 bg-white dark:bg-slate-200 rounded-full relative overflow-hidden border-2 border-gray-300 dark:border-gray-600 group-hover:border-purple-400 dark:group-hover:border-purple-300 transition-colors duration-300">

                      {/* Pupil */}
                      <motion.div
                        animate={{
                          x: [0, 8, -8, 0],
                          y: [0, -2, 2, 0]
                        }}
                        whileHover={{
                          x: [0, 12, -12, 0],
                          y: [0, -4, 4, 0],
                          scale: [1, 1.2, 1],
                          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-black rounded-full group-hover:bg-purple-600 transition-colors duration-300">

                        {/* Highlight */}
                        <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                      </motion.div>
                    </motion.div>

                    {/* Eyelashes */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scaleY: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 3 + i * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.1
                          }}
                          className="absolute w-0.5 h-3 bg-gray-800 dark:bg-gray-200 rounded-full"
                          style={{
                            left: `${(i - 2) * 4}px`,
                            transformOrigin: 'bottom center'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                whileHover={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360, 720],
                  transition: { duration: 1, ease: "easeInOut" }
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-4 w-6 h-6 bg-green-400 rounded-lg opacity-70 flex items-center justify-center text-white text-xs font-bold group-hover:bg-green-300 group-hover:opacity-100 transition-all duration-300">
                ✦
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 15, 0],
                  scale: [1, 1.2, 1]
                }}
                whileHover={{
                  scale: [1, 1.5, 1],
                  x: [0, 20, 0],
                  transition: { duration: 1, ease: "easeInOut" }
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-3 -right-3 w-4 h-4 bg-blue-500 rounded-full opacity-60 group-hover:bg-blue-400 group-hover:opacity-100 transition-all duration-300">
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                whileHover={{
                  rotate: [0, 720],
                  scale: [1, 1.6, 1],
                  transition: { duration: 1.5, ease: "easeInOut" }
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 -right-16 w-5 h-2 bg-yellow-400 rounded-full opacity-80 group-hover:bg-yellow-300 group-hover:opacity-100 transition-all duration-300">
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Capabilities Deck Button - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-slate-800 text-gray-800 dark:text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
          <span>Our Capabilities Deck</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}