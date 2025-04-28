import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { Reservation } from '../types';

const availableTimes = [
  '17:00', '17:30', '18:00', '18:30', '19:00', 
  '19:30', '20:00', '20:30', '21:00', '21:30'
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

const Reservations = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>('');
  const [partySize, setPartySize] = useState<number>(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const reservation: Reservation = {
        date: date!,
        time,
        partySize,
        name,
        email,
        phone,
        specialRequests
      };
      
      console.log('Reservation submitted:', reservation);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const nextStep = () => {
    if (step === 1 && (!date || !time || !partySize)) {
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetForm = () => {
    setDate(null);
    setTime('');
    setPartySize(2);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    setIsSuccess(false);
    setStep(1);
  };

  return (
    <div className="pt-14">
      {/* Hero Section */}
      <div className="relative bg-secondary-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reservations</h1>
            <p className="text-xl text-gray-200">
              Secure your table for an unforgettable dining experience at Saveur
            </p>
          </motion.div>
        </div>
      </div>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle size={64} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-secondary-900">Reservation Confirmed!</h2>
                <p className="text-secondary-700 mb-6">
                  Thank you for your reservation, {name}. We look forward to welcoming you
                  {date && ` on ${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`} 
                  {time && ` at ${time}`}.
                </p>
                <p className="text-secondary-700 mb-6">
                  A confirmation email has been sent to {email}. If you need to make any changes to your reservation,
                  please contact us at (555) 123-4567.
                </p>
                <Button onClick={resetForm} variant="outline">Make Another Reservation</Button>
              </motion.div>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Reservation Steps */}
                <div className="flex border-b">
                  <button
                    onClick={() => step > 1 && setStep(1)}
                    className={`flex-1 py-4 px-2 text-center font-medium ${
                      step === 1 ? 'text-accent-600 border-b-2 border-accent-600' : 'text-secondary-500'
                    }`}
                  >
                    1. Choose Date & Time
                  </button>
                  <button
                    onClick={() => date && time && partySize && step > 2 && setStep(2)}
                    className={`flex-1 py-4 px-2 text-center font-medium ${
                      step === 2 ? 'text-accent-600 border-b-2 border-accent-600' : 'text-secondary-500'
                    }`}
                    disabled={step < 2}
                  >
                    2. Your Details
                  </button>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-semibold mb-6 text-secondary-900">Select Your Reservation Details</h2>
                      
                      {/* Date Picker */}
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}
                            minDate={new Date()}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 pl-10"
                            placeholderText="Select a date"
                            required
                          />
                          <Calendar className="absolute left-3 top-3.5 text-secondary-400" size={18} />
                        </div>
                      </div>
                      
                      {/* Time Selector */}
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Time <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 pl-10 appearance-none"
                            required
                          >
                            <option value="">Select a time</option>
                            {availableTimes.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                          <Clock className="absolute left-3 top-3.5 text-secondary-400" size={18} />
                        </div>
                      </div>
                      
                      {/* Party Size */}
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Party Size <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={partySize}
                            onChange={(e) => setPartySize(parseInt(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 pl-10 appearance-none"
                            required
                          >
                            {partySizes.map((size) => (
                              <option key={size} value={size}>
                                {size} {size === 1 ? 'person' : 'people'}
                              </option>
                            ))}
                          </select>
                          <Users className="absolute left-3 top-3.5 text-secondary-400" size={18} />
                        </div>
                        <p className="mt-2 text-sm text-secondary-500">
                          For parties larger than 8, please call us at (555) 123-4567
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          onClick={nextStep}
                          disabled={!date || !time || !partySize}
                          fullWidth
                        >
                          Continue to Your Details
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-semibold mb-6 text-secondary-900">Your Contact Information</h2>
                      
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
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
                      
                      {/* Email */}
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
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          required
                        />
                      </div>
                      
                      {/* Special Requests */}
                      <div>
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-secondary-700 mb-2">
                          Special Requests
                        </label>
                        <textarea
                          id="specialRequests"
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          placeholder="Allergies, special occasions, seating preferences, etc."
                        />
                      </div>
                      
                      <div className="pt-4 flex gap-4">
                        <Button 
                          onClick={prevStep}
                          variant="outline"
                          type="button"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={!name || !email || !phone || isSubmitting}
                          fullWidth
                        >
                          {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center text-secondary-900">Reservation Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-3 text-secondary-900">Reservation Policies</h4>
                <ul className="space-y-2 text-secondary-700">
                  <li>• Tables are held for 15 minutes past reservation time</li>
                  <li>• For cancellations, please notify us at least 24 hours in advance</li>
                  <li>• For parties of 6 or more, a credit card is required to secure the reservation</li>
                  <li>• We offer a children's menu for guests under 12 years old</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-3 text-secondary-900">Hours of Operation</h4>
                <ul className="space-y-2 text-secondary-700">
                  <li><span className="font-medium">Monday - Thursday:</span> 5:00 PM - 10:00 PM</li>
                  <li><span className="font-medium">Friday - Saturday:</span> 5:00 PM - 11:00 PM</li>
                  <li><span className="font-medium">Sunday:</span> 5:00 PM - 9:00 PM</li>
                  <li><span className="font-medium">Weekend Lunch (Sat-Sun):</span> 12:00 PM - 3:00 PM</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-3 text-secondary-900">Private Dining</h4>
              <p className="text-secondary-700 mb-4">
                For special events, celebrations, or corporate functions, we offer private dining rooms that can accommodate
                groups of various sizes.
              </p>
              <p className="text-secondary-700">
                Please contact our events team at <span className="text-accent-600">events@saveur.com</span> or call
                <span className="text-accent-600"> (555) 123-9876</span> for more information and availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;