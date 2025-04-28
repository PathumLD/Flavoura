import { useState } from 'react';
import { motion } from 'framer-motion';
import { LinkButton } from '../ui/Button';
import { MenuItem } from '../../types';

const featuredItems: MenuItem[] = [
  {
    id: 1,
    name: 'Wild Mushroom Risotto',
    description: 'Creamy Arborio rice with a medley of wild mushrooms, finished with aged Parmesan and truffle oil',
    price: 28,
    image: 'https://www.crowdedkitchen.com/wp-content/uploads/2020/09/wild-mushroom-risotto-11.jpg',
    category: 'main',
    featured: true
  },
  {
    id: 2,
    name: 'Seared Scallops',
    description: 'Pan-seared sea scallops with cauliflower purée, crispy pancetta, and apple cider reduction',
    price: 32,
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'starters',
    featured: true
  },
  {
    id: 3,
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream and raspberry coulis',
    price: 14,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    featured: true
  },
  {
    id: 4,
    name: 'Herb-Crusted Rack of Lamb',
    description: 'Tender rack of lamb with a fragrant herb crust, served with roasted root vegetables and red wine jus',
    price: 42,
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'main',
    featured: true
  },
];

const FeaturedMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-secondary-900">Our Signature Dishes</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Immerse yourself in our culinary masterpieces, each crafted with precision and passion to deliver an unforgettable dining experience.
            </p>
          </motion.div>
        </div>

        {/* Featured Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-2 py-1 text-xs font-medium bg-accent-600 rounded">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-white bg-black/70 px-3 py-1 rounded-full">
                  ${item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-900">{item.name}</h3>
                <p className="text-secondary-600 mb-4">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <LinkButton to="/menu" variant="primary" size="lg">
            View Full Menu
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;