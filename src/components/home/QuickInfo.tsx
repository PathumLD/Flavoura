import { motion } from 'framer-motion';
import { MapPin, Clock, Utensils, Calendar } from 'lucide-react';
import { LinkButton } from '../ui/Button';

const InfoCard = ({ 
  icon, 
  title, 
  description,
  link,
  linkText,
  delay
}: { 
  icon: JSX.Element; 
  title: string; 
  description: string;
  link?: string;
  linkText?: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
    >
      <div className="p-3 bg-accent-50 rounded-full mb-4 text-accent-600">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-secondary-900">{title}</h3>
      <p className="text-secondary-600 mb-4">{description}</p>
      {link && linkText && (
        <LinkButton to={link} variant="text" size="sm" className="mt-auto">
          {linkText}
        </LinkButton>
      )}
    </motion.div>
  );
};

const QuickInfo = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={<Clock size={24} />}
            title="Opening Hours"
            description="Mon-Thu: 5-10pm | Fri-Sat: 5-11pm | Sun: 5-9pm | Lunch: Weekends 12-3pm"
            delay={0.1}
          />
          <InfoCard
            icon={<MapPin size={24} />}
            title="Location"
            description="123 Gourmet Avenue, Culinary District, CA 90210"
            link="/contact"
            linkText="Get Directions"
            delay={0.2}
          />
          <InfoCard
            icon={<Utensils size={24} />}
            title="Our Menu"
            description="Seasonally inspired dishes crafted with locally sourced ingredients"
            link="/menu"
            linkText="View Menu"
            delay={0.3}
          />
          <InfoCard
            icon={<Calendar size={24} />}
            title="Reservations"
            description="Book your table in advance to ensure availability"
            link="/reservations"
            linkText="Book Now"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;