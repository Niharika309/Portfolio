import { motion, AnimatePresence } from "framer-motion";
import { Eye, Users, Award, Zap, Star, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const cardData = [
  {
    id: 1,
    icon: Eye,
    gradient: "from-blue-400 to-blue-600",
    title: "Job Portal (MERN Stack)",
    description: "A complete job search and recruitment platform with advanced search and filtering, role-based authentication for recruiters and job seekers, and secure application management.",
    footerIcon: Users,
    footerTitle: "Tech: React · Redux Toolkit · Node.js",
    footerSubtitle: "Express · MongoDB"
  },
  {
    id: 2,
    icon: Award,
    gradient: "from-purple-400 to-purple-600",
    title: "E-Commerce Platform (React + Node.js)",
    description: "Responsive shopping site with cart functionality, category navigation, and persistent state using Redux Toolkit for fast, reliable UX.",
    footerIcon: Star,
    footerTitle: "Tech: React · Tailwind CSS · Redux Toolkit",
    footerSubtitle: "Node.js · MongoDB"
  },
  {
    id: 3,
    icon: Zap,
    gradient: "from-green-400 to-green-600",
    title: "Rail Reservation System (C++)",
    description: "C++ train booking system supporting registration, booking, cancellation, and feedback; built with OOP principles (classes, inheritance, encapsulation).",
    footerIcon: ArrowRight,
    footerTitle: "Tech: C++",
    footerSubtitle: "OOP Concepts"
  },
  {
    id: 4,
    icon: Eye,
    gradient: "from-red-400 to-red-600",
    title: "Company Dashboard (React + Material-UI)",
    description: "Frontend app for browsing company data with advanced filtering, sorting, pagination, loading states, and API fallback to mock data. Built with React and Material-UI for a professional UI.",
    footerIcon: Users,
    footerTitle: "Tech: React · Material-UI · JSON Server",
    footerSubtitle: "Context API"
  },
  {
    id: 5,
    icon: Award,
    gradient: "from-yellow-400 to-orange-600",
    title: "Task Tracker (MERN Stack)",
    description: "Full-stack task management app with JWT auth and role-based admin/employee workflows. Admins manage users/tasks; employees view and update assigned tasks.",
    footerIcon: Star,
    footerTitle: "Tech: React · Node.js · Express · MongoDB",
    footerSubtitle: "JWT"
  }
];

const Card = ({ card, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = card.icon;
  const FooterIconComponent = card.footerIcon;

  // Handle escape key to close expanded card
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <>
      {/* Normal Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={() => setIsExpanded(true)}
        whileHover={{ 
          scale: 1.05,
          y: -15,
          rotateY: 5,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(147, 51, 234, 0.15)",
          transition: { 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 300,
            damping: 25
          }
        }}
        whileTap={{ 
          scale: 0.95,
          y: -5,
          transition: { duration: 0.1 }
        }}
        className="min-w-[350px] md:min-w-[400px] bg-white dark:bg-slate-700 rounded-3xl p-8 shadow-lg transition-all duration-500 cursor-pointer group hover:shadow-2xl transform-gpu">
        
        <motion.div 
          className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6`}
          whileHover={{
            scale: 1.15,
            rotate: 15,
            boxShadow: "0 0 40px rgba(147, 51, 234, 0.5), 0 0 80px rgba(147, 51, 234, 0.2)",
            transition: { 
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 400,
              damping: 20
            }
          }}
          transition={{ duration: 0.3 }}>
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: -5,
              transition: { duration: 0.2 }
            }}>
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white"
          whileHover={{
            color: "#9333ea",
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.3 }}>
          {card.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          whileHover={{
            color: "#374151",
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.3 }}>
          {card.description}
        </motion.p>
        
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ 
            x: 8, 
            transition: { 
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }
          }}>
          <motion.div 
            className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center"
            whileHover={{ 
              scale: 1.15, 
              rotate: 8,
              backgroundColor: "#f3e8ff",
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
              transition: { 
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            transition={{ duration: 0.3 }}>
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: -3,
                transition: { duration: 0.2 }
              }}>
              <FooterIconComponent className={`w-6 h-6 ${card.footerIcon === Star ? 'text-yellow-500' : 'text-gray-600'}`} />
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{
              x: 3,
              transition: { duration: 0.2 }
            }}>
            <motion.p 
              className="font-medium text-gray-900 dark:text-white"
              whileHover={{
                color: "#9333ea",
                scale: 1.02,
                transition: { duration: 0.3 }
              }}>
              {card.footerTitle}
            </motion.p>
            <motion.p 
              className="text-sm text-gray-500 dark:text-gray-400"
              whileHover={{
                color: "#6b7280",
                scale: 1.01,
                transition: { duration: 0.3 }
              }}>
              {card.footerSubtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg"
            onClick={() => setIsExpanded(false)}>
            
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 100 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full bg-white dark:bg-slate-700 flex flex-col">
              
              {/* Close Button */}
              <motion.button
                onClick={() => setIsExpanded(false)}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 90,
                  backgroundColor: "#fef2f2",
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.85 }}
                className="absolute top-8 right-8 w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center z-10">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}>
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </motion.div>
              </motion.button>

              {/* Main Content Container */}
              <div className="flex-1 flex items-center justify-center px-8 py-16">
                <div className="max-w-4xl w-full">
                  <motion.div 
                    className={`w-32 h-32 bg-gradient-to-br ${card.gradient} rounded-3xl flex items-center justify-center mb-12 mx-auto`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}>
                    <IconComponent className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-5xl md:text-6xl font-semibold mb-8 text-gray-900 dark:text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}>
                    {card.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-12 leading-relaxed text-xl md:text-2xl text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}>
                    {card.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}>
                    <motion.div 
                      className="w-20 h-20 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}>
                      <FooterIconComponent className={`w-10 h-10 ${card.footerIcon === Star ? 'text-yellow-500' : 'text-gray-600'}`} />
                    </motion.div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900 dark:text-white text-xl">{card.footerTitle}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-lg">{card.footerSubtitle}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Hint text */}
              <motion.p 
                className="text-sm text-gray-400 dark:text-gray-500 text-center pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}>
                Press ESC or click outside to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HorizontalCards = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8">
            My <span className="font-medium">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selected projects built with modern web technologies — focused on functionality, performance, and user experience.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Cards Container */}
        <div className="relative">
          <div className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 px-4">
            {cardData.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {cardData.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-500 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Decorative 3D Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl">
          </motion.div>
          
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              y: [0, -20, 0] 
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-30 blur-lg">
          </motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, 30, 0],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-yellow-200 to-red-200 rounded-full opacity-25 blur-md">
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCards;