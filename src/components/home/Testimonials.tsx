import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    comment: 'An extraordinary dining experience! The wild mushroom risotto was the best I\'ve ever tasted, and the service was impeccable. Will definitely be returning soon.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    comment: 'From the moment we walked in, the ambiance captivated us. Each dish was a work of art, and the flavors were incredible. The sommelier\'s wine pairing recommendations elevated our meal to another level.'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4,
    comment: 'Saveur offers a perfect blend of innovative cuisine while respecting traditional techniques. The herb-crusted rack of lamb was cooked to perfection. Highly recommend for special occasions!'
  },
  {
    id: 4,
    name: 'James Wilson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    comment: 'This restaurant consistently delivers excellence. We celebrated our anniversary here, and the staff went above and beyond to make it memorable. The chocolate fondant dessert is simply heavenly!'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-secondary-900">What Our Guests Say</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We're honored to have served countless memorable experiences to our guests. Here's what some of them have to say.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-secondary-50 rounded-lg p-8 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-secondary-900">{testimonial.name}</h4>
                        <div className="flex text-accent-500 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                              className={i < testimonial.rating ? "text-accent-500" : "text-secondary-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-secondary-700 italic">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white p-3 rounded-full shadow-md text-secondary-600 hover:text-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white p-3 rounded-full shadow-md text-secondary-600 hover:text-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-accent-600' : 'bg-secondary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;