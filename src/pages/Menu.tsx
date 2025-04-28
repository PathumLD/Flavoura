import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menuItems';

type Category = 'all' | 'starters' | 'main' | 'desserts' | 'beverages';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Menu' },
    { value: 'starters', label: 'Starters' },
    { value: 'main', label: 'Main Courses' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'beverages', label: 'Beverages' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-secondary-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h1>
            <p className="text-xl text-gray-200">
              Explore our carefully crafted selection of dishes featuring the finest seasonal ingredients
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="bg-white sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap overflow-x-auto py-4 gap-2 md:gap-4 md:justify-center scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.value
                    ? 'bg-accent-600 text-white'
                    : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-600 text-white px-2 py-1 rounded text-sm font-medium">
                    ${item.price}
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <span className="text-sm font-medium text-accent-600 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-secondary-900">{item.name}</h3>
                  <p className="text-secondary-600 mb-4">{item.description}</p>
                  {item.featured && (
                    <span className="inline-block bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded">
                      Chef's Recommendation
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Pairing Note */}
      <section className="py-12 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-secondary-900">Wine Pairings</h3>
            <p className="text-secondary-700">
              Enhance your dining experience with our sommelier's carefully selected wine pairings.
              Ask your server for recommendations to complement your meal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;