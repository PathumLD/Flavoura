import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo}
                alt="Flavoura Logo"
                className="w-8 h-8 mr-2"
              />
              <span className="text-2xl font-semibold tracking-tight">Flavoura</span>
            </div>
            <p className="text-secondary-300 max-w-xs">
              Experience the art of fine dining with our carefully crafted menu and exceptional service in an elegant atmosphere.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-secondary-300 hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-secondary-300 hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-secondary-300 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-accent-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-secondary-300 hover:text-accent-500 transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link to="/reservations" className="text-secondary-300 hover:text-accent-500 transition-colors">Reservations</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-accent-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-accent-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-secondary-300">123 Gourmet Avenue, Culinary District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent-500 mr-2 flex-shrink-0" />
                <span className="text-secondary-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent-500 mr-2 flex-shrink-0" />
                <span className="text-secondary-300">info@flavoura.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-secondary-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5:00 PM - 9:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Lunch (Weekends only)</span>
                <span>12:00 PM - 3:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-secondary-300">Stay updated with our latest offers and events.</p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md bg-secondary-800 text-white placeholder-secondary-400 border border-secondary-700 focus:outline-none focus:ring-2 focus:ring-accent-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-md transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-secondary-800 text-center text-secondary-400 text-sm">
          <p>© {new Date().getFullYear()} Flavoura Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;