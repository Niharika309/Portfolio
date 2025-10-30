import { motion } from "framer-motion";
import { ArrowRight, Star, Zap } from "lucide-react";

export default function AdSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
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
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)'
            }}>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Ad Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Featured Advertisement</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 text-gray-900 dark:text-white">
            Boost Your <span className="font-medium">Business</span> Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover premium solutions that drive growth and innovation for your business needs.
          </p>
        </motion.div>

        {/* Main Ad Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Ad Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Transform Your Digital Presence
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Join thousands of satisfied customers who have revolutionized their business with our cutting-edge solutions. 
                Experience the difference that professional quality makes.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "24/7 Premium Support",
                "Advanced Analytics Dashboard", 
                "Custom Integration Solutions",
                "Enterprise-Grade Security"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative">
            
            {/* Main Ad Visual */}
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              {/* Mock Dashboard/Product Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Premium Dashboard</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Advanced Analytics</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">+247%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Growth Rate</div>
                  </div>
                </div>

                {/* Mock Chart Bars */}
                <div className="space-y-3">
                  {[85, 92, 78, 96, 88].map((percentage, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-16 text-sm text-gray-600 dark:text-gray-400">
                        Week {index + 1}
                      </div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                        </motion.div>
                      </div>
                      <div className="w-12 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {percentage}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Section */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    See It In Action
                  </h5>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                    {/* Video Element */}
                    <video
                      className="w-full h-48 object-cover"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      preload="metadata"
                      controls={false}
                      onCanPlay={(e) => {
                        console.log('Video can play');
                        e.target.play().catch(err => console.log('Play failed:', err));
                      }}
                      onError={(e) => {
                        console.log('Video error:', e.target.error);
                      }}
                      onLoadStart={() => console.log('Video loading started')}
                      style={{ backgroundColor: '#f3f4f6' }}>
                      <source src="/assets/videos/demo-video.mp4" type="video/mp4" />
                      <source src="./assets/videos/demo-video.mp4" type="video/mp4" />
                    </video>

                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center">
                <span className="text-white text-lg">💎</span>
              </motion.div>
            </div>
          </motion.div>
        </div>



        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 bg-white/50 dark:bg-slate-800/50 rounded-3xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join over 10,000+ businesses that trust our platform for their growth and success.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}