import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={clsx(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-white bg-opacity-95 shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo}
            alt="Flavoura Logo"
            className={clsx(
              'mr-2 transition-all duration-300',
              isScrolled ? 'h-12 w-12' : 'h-14 w-14'
            )}
          />
          <span
            className={clsx(
              'font-semibold tracking-tight transition-all duration-300',
              isScrolled || !isHomePage
                ? 'text-secondary-950 text-xl '
                : 'text-white text-2xl drop-shadow-md'
            )}
          >
            Flavoura
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={clsx(
                    'font-medium transition-all duration-200 hover:text-accent-500',
                    isScrolled || !isHomePage
                      ? 'text-secondary-800'
                      : 'text-white drop-shadow-sm',
                    location.pathname === link.path && 'text-accent-500'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={clsx(
            'md:hidden z-50',
            isScrolled || !isHomePage ? 'text-accent-600' : 'text-white'
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col h-full justify-center items-center">
              <ul className="flex flex-col space-y-6 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={clsx(
                        'text-xl font-medium transition-colors',
                        location.pathname === link.path
                          ? 'text-accent-600'
                          : 'text-secondary-800 hover:text-accent-500'
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;