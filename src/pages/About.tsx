import { motion } from 'framer-motion';
import { Users, ThumbsUp, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-secondary-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-200">
              Discover the passion, people, and philosophy behind Saveur's culinary journey
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-secondary-900">Our Culinary Journey</h2>
              <div className="space-y-4 text-secondary-700">
                <p>
                  Saveur began in 2010 as a small bistro with a big dream: to create a dining destination where exceptional food, thoughtful service, and elegant ambiance converge to create memorable experiences.
                </p>
                <p>
                  Founded by acclaimed Chef Marie Laurent after years of training in prestigious kitchens across France and Italy, Saveur quickly developed a reputation for inventive dishes that respect traditional techniques while embracing contemporary flavors.
                </p>
                <p>
                  Over the years, we've grown from our humble beginnings, but our commitment to culinary excellence has never wavered. Each dish we serve is a reflection of our journey—a journey defined by passion, precision, and the pursuit of perfection.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-secondary-900">Our Values</h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                The principles that guide every aspect of our culinary creation and service
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="mb-4 inline-flex p-4 bg-primary-50 rounded-full text-primary-600">
                <ThumbsUp size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Quality First</h3>
              <p className="text-secondary-600">
                We select only the finest ingredients, sourced locally whenever possible, and prepare each dish with meticulous attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="mb-4 inline-flex p-4 bg-accent-50 rounded-full text-accent-600">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Heartfelt Hospitality</h3>
              <p className="text-secondary-600">
                We believe that genuine care and attention create the foundation for exceptional service and memorable dining experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="mb-4 inline-flex p-4 bg-secondary-50 rounded-full text-secondary-600">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Culinary Innovation</h3>
              <p className="text-secondary-600">
                While respecting culinary traditions, we continuously explore new techniques and flavor combinations to create distinctive, memorable dishes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-secondary-900">Meet Chef Marie Laurent</h2>
              <div className="space-y-4 text-secondary-700">
                <p>
                  With over 20 years of experience in the culinary world, Chef Marie Laurent brings a wealth of knowledge and passion to Saveur's kitchen. After training at Le Cordon Bleu in Paris, she honed her craft in Michelin-starred restaurants across Europe.
                </p>
                <p>
                  Chef Marie's approach to cooking balances classical French techniques with global influences, creating dishes that are at once familiar and surprising. Her commitment to seasonal, sustainable ingredients drives the ever-evolving menu at Saveur.
                </p>
                <p>
                  "Food should tell a story—of tradition, of place, of season. But most importantly, it should create joy and bring people together," says Chef Marie. This philosophy infuses every aspect of the dining experience at Saveur.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chef Marie Laurent" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;