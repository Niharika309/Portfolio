import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="bg-white dark:bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className=" absolute inset-0 pointer-events-none">
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

      <div className=" w-full px-8 md:px-12 lg:px-20 pb-16 md:pb-24 relative z-10">
        {/* Video - Full Width like First Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full">
          
          {/* Video Element - Full Width */}
          <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              preload="metadata"
              controls={true}
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
        </motion.div>
      </div>
    </section>
  );
}