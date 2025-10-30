import { Menu, MessageCircle, PhoneCall, Star, ArrowRight, Github, Linkedin, X, Mail, MapPin, Eye, Users, Award, Zap, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import AboutSection from "./components/AboutSection";
import { useTheme } from "./contexts/ThemeContext";
// import adVideo from "./assets/videos/ad.mp4";

export default function NiharikaPortfolio() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSmoothNavigation = (targetId) => {
    setIsTransitioning(true);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-slate-100 overflow-x-hidden transition-colors duration-300 relative mx-4 md:mx-8 lg:mx-12 xl:mx-16">
      {/* Global Sparkle Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Global Floating Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`global-sparkle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            className="absolute w-0.5 h-0.5 bg-blue-400 dark:bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)'
            }}>
          </motion.div>
        ))}

        {/* Global Twinkling Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`global-star-${i}`}
            animate={{
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
            className="absolute text-purple-400 dark:text-purple-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: '6px'
            }}>
            ✦
          </motion.div>
        ))}

        {/* Global Glowing Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`global-dot-${i}`}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-yellow-400 dark:bg-yellow-300 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}>
          </motion.div>
        ))}
      </div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 relative">
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-4 md:py-6">
          <div className="text-xl md:text-2xl font-bold">SUSHANTH KODIPYAKA</div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm md:text-base">
            <button onClick={() => handleSmoothNavigation('home')} className="hover:opacity-70 transition-opacity">Home</button>
            <button onClick={() => handleSmoothNavigation('projects')} className="hover:opacity-70 transition-opacity">Projects</button>
            <button onClick={() => handleSmoothNavigation('works')} className="hover:opacity-70 transition-opacity">Works</button>
            <button onClick={() => handleSmoothNavigation('contact')} className="hover:opacity-70 transition-opacity">Contact Me</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Let's Talk!
            </button>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 border-2 border-gray-300 dark:border-gray-600"
              aria-label="Toggle theme">
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
            <Menu className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Full-Screen Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center"
            style={{ pointerEvents: 'none' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-12 h-12 border-3 border-blue-600/30 border-t-blue-600 rounded-full animate-spin">
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <HeroSection />

      {/* Video Section */}
      <VideoSection />

      {/* About Section */}
      <div className="relative z-10">
        <AboutSection />
      </div>

      {/* Portfolio Showcase Section - QClay Style */}
      <section id="works" className="py-20 md:py-32 bg-black dark:bg-black relative overflow-hidden">
        <div className="max-w-7xl w-full px-8 md:px-12 lg:px-20 mx-auto">

          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-16">
          </motion.div>

          {/* Horizontal Scroll Portfolio Cards - QClay Style */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 lg:gap-12 overflow-x-auto scrollbar-hide pb-4" style={{ scrollSnapType: 'x mandatory' }}>

              {/* Project 1 - Yoga Mobile App UI */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]"
                style={{ scrollSnapAlign: 'start' }}>
                <div className="relative aspect-[3/2] h-[250px] md:h-[300px] lg:h-[350px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent"></div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-700"></div>

                  {/* Content */}
                  <div className="relative w-full h-full flex flex-col justify-between p-8">
                    {/* Top Tag */}
                    <div className="flex justify-start">
                      <span className="text-xs font-medium text-gray-400 tracking-wider uppercase bg-white/5 px-3 py-1 rounded-full backdrop-blur-sm">
                        QClay Design / Mobile App / 2024
                      </span>
                    </div>

                    {/* Center Icon */}
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                        <Users className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>

                    {/* Bottom Title */}
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-200 transition-colors duration-500">
                        YOGA MOBILE<br />
                        APP UI
                      </h3>
                    </div>
                  </div>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/50 group-hover:via-purple-500/50 group-hover:to-blue-500/50 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                </div>
              </motion.div>

              {/* Project 2 - OCAMBA Landing Page */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]"
                style={{ scrollSnapAlign: 'start' }}>
                <div className="relative aspect-[3/2] h-[250px] md:h-[300px] lg:h-[350px] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30"></div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/0 to-purple-200/0 group-hover:from-blue-200/40 group-hover:to-purple-200/40 transition-all duration-700"></div>

                  {/* Content */}
                  <div className="relative w-full h-full flex flex-col justify-between p-8">
                    {/* Top Tag */}
                    <div className="flex justify-start">
                      <span className="text-xs font-medium text-gray-600 tracking-wider uppercase bg-white/60 px-3 py-1 rounded-full backdrop-blur-sm">
                        QClay Design / Landing Page / 2024
                      </span>
                    </div>

                    {/* Center Icon */}
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                        className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                        <Eye className="w-10 h-10 text-gray-700" />
                      </motion.div>
                    </div>

                    {/* Bottom Title */}
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors duration-500">
                        OCAMBA<br />
                        LANDING PAGE
                      </h3>
                    </div>
                  </div>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-300/0 via-purple-300/0 to-blue-300/0 group-hover:from-blue-300/60 group-hover:via-purple-300/60 group-hover:to-blue-300/60 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                </div>
              </motion.div>

              {/* Project 3 - NIFTY NAFTY NFT Platform */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]"
                style={{ scrollSnapAlign: 'start' }}>
                <div className="relative aspect-[3/2] h-[250px] md:h-[300px] lg:h-[350px] bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-transparent"></div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-700"></div>

                  {/* Content */}
                  <div className="relative w-full h-full flex flex-col justify-between p-8">
                    {/* Top Tag */}
                    <div className="flex justify-start">
                      <span className="text-xs font-medium text-purple-200 tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        QClay Design / NFT Platform / 2024
                      </span>
                    </div>

                    {/* Center Icon */}
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                        className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                        <Award className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>

                    {/* Bottom Title */}
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-purple-200 transition-colors duration-500">
                        NIFTY NAFTY<br />
                        NFT PLATFORM
                      </h3>
                    </div>
                  </div>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/50 group-hover:via-blue-500/50 group-hover:to-purple-500/50 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                </div>
              </motion.div>


            </div>
          </div>

          {/* Bottom Navigation Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16 space-x-2">
            {[0, 1, 2].map((dot, index) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-white' : 'bg-gray-600'
                  }`}>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8">
              My <span className="font-medium">Skills</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I specialize in modern web technologies and frameworks to build scalable, efficient applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "React Development", desc: "Building dynamic, interactive user interfaces with React and modern JavaScript." },
              { title: "Node.js & Express", desc: "Creating robust backend APIs and server-side applications." },
              { title: "MongoDB Database", desc: "Designing and managing NoSQL databases for scalable data storage." },
              { title: "Frontend Technologies", desc: "Expert in HTML5, CSS3, JavaScript ES6+, and responsive design." },
              { title: "UI/UX Design", desc: "Creating intuitive user experiences with modern design principles." },
              { title: "Full-Stack Integration", desc: "Seamlessly connecting frontend and backend for complete solutions." }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-700 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative z-10" >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8">
              Let's work <span className="font-medium">together</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. Let's connect and discuss your ideas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 dark:border-gray-600 px-8 py-4 rounded-full text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                View Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section >

      {/* Floating Contact Buttons */}
      < div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50" >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
          <PhoneCall className="w-5 h-5" />
        </motion.button>
      </div >

      {/* Footer */}
      < footer className="w-full bg-black dark:bg-slate-950 text-white transition-colors duration-300 relative z-10" >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-6">NIHARIKA PATEL</div>
              <p className="text-gray-300 dark:text-gray-400 mb-8 max-w-md text-lg">
                Full-Stack Developer creating modern, scalable web applications with cutting-edge technologies.
              </p>
              <div className="space-y-3 text-gray-400 dark:text-gray-500">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Mumbai, India & Available Remotely</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>niharika.patel@email.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4 text-gray-300 dark:text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="#works" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Me</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-4 text-gray-300 dark:text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">React Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Node.js & Express</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MongoDB Database</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Frontend Technologies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 hover:border-gray-600 transition-all duration-300">
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 hover:border-gray-600 transition-all duration-300">
                <X className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:niharika.patel@email.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="text-gray-400 dark:text-gray-500 text-center md:text-right">
              <p>&copy; 2024 Niharika Patel. All rights reserved.</p>
              <p className="mt-2 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="mx-2">•</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}