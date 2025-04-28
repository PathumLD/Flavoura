import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', { name, email, subject, message });
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-secondary-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              We'd love to hear from you. Reach out with any questions or feedback.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-secondary-900">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-secondary-100 rounded-full text-accent-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Our Location</h3>
                    <p className="text-secondary-600 mt-1">123 Gourmet Avenue, Culinary District, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-secondary-100 rounded-full text-accent-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Phone</h3>
                    <p className="text-secondary-600 mt-1">(555) 123-4567</p>
                    <p className="text-secondary-500 text-sm mt-1">For reservations and general inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-secondary-100 rounded-full text-accent-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Email</h3>
                    <p className="text-secondary-600 mt-1">info@saveur.com</p>
                    <p className="text-secondary-500 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-secondary-100 rounded-full text-accent-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Hours of Operation</h3>
                    <div className="text-secondary-600 mt-1 space-y-1">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 5:00 PM - 9:00 PM</p>
                      <p>Weekend Lunch: 12:00 PM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10 h-64 bg-secondary-100 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203675384!2d-118.40261378478882!3d34.0721938805927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6912345%3A0x7ea9196832d6e994!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1656008994589!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                ></iframe>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-secondary-900">Send Us a Message</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We've received your message and will get back to you shortly.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    className="mt-6"
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center text-secondary-900">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-secondary-900">Do you offer gift cards?</h3>
              <p className="text-secondary-700">
                Yes, we offer gift cards in any denomination. They can be purchased at the restaurant or through our website.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-secondary-900">Is there parking available?</h3>
              <p className="text-secondary-700">
                We offer complimentary valet parking for all our guests. Street parking is also available in the vicinity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-secondary-900">Do you accommodate dietary restrictions?</h3>
              <p className="text-secondary-700">
                Absolutely. Please inform us of any dietary restrictions when making your reservation, and our chefs will be happy to accommodate your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-secondary-900">What is your dress code?</h3>
              <p className="text-secondary-700">
                We recommend smart casual attire. While we don't enforce a strict dress code, we ask guests to refrain from wearing athletic wear or beachwear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;