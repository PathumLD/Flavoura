import { motion } from 'framer-motion';
import { LinkButton } from '../ui/Button';

const About = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Chef preparing food"
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto lg:mx-0 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-4 rounded shadow-lg hidden md:block">
                <p className="font-medium">Celebrating 15 Years of Culinary Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 lg:pl-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary-900">Our Culinary Story</h2>
            
            <div className="space-y-4 text-secondary-700">
              <p>
                Founded in 2010 by acclaimed Chef Marie Laurent, Flavoura was born from a passion for creating memorable dining experiences that celebrate the art of gastronomy.
              </p>
              <p>
                Our philosophy is simple: source the finest seasonal ingredients, prepare them with respect and precision, and serve them in an atmosphere of warmth and sophistication.
              </p>
              <p>
                Every dish tells a story—of our local farmers and producers, of culinary traditions both classic and innovative, and of our commitment to sustainable practices that honor our environment.
              </p>
            </div>
            
            <div className="mt-8">
              <LinkButton to="/about" variant="outline">
                Learn More About Us
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;