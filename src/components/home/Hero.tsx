import { motion } from 'framer-motion';
import { LinkButton } from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Experience Culinary Excellence
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Indulge in a symphony of flavors crafted with precision and passion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <LinkButton to="/reservations" size="lg">
              Reserve a Table
            </LinkButton>
            <LinkButton to="/menu" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10">
              Explore Our Menu
            </LinkButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ height: ['20%', '80%', '20%'] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-white rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;