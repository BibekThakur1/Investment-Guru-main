import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Building,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    // service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        // service: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: 'Visit Our Office',
    //   details: ['Durbar Marg, Kathmandu', 'Nepal - 44600'],
    //   color: 'from-primary-500 to-primary-600'
    // },
    // {
    //   icon: Phone,
    //   title: 'Call Us',
    //   details: ['+977-1-4567890', '+977-9841234567'],
    //   color: 'from-secondary-500 to-secondary-600'
    // },
    // {
    //   icon: Mail,
    //   title: 'Email Us',
    //   details: ['info@investmentguru.com.np', 'support@investmentguru.com.np'],
    //   color: 'from-accent-500 to-accent-600'
    // },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-primary-600 to-secondary-500'
    }
  ];

  const services = [
    'Portfolio Management',
    'Investment Planning',
    'Risk Management',
    'Retirement Planning',
    'Tax Advisory',
    'Market Analysis',
    'Other'
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4 sm:mb-6"
          >
            <MessageSquare size={16} className="mr-2 flex-shrink-0" />
            <span className="whitespace-nowrap">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4 sm:mb-6 px-2">
            Contact Our
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Expert Team</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-4">
            Ready to start your investment journey? Get in touch with our experienced advisors 
            for personalized financial guidance and investment solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 w-full">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 w-full max-w-none"
          >
            <div className="flex items-start sm:items-center mb-6 sm:mb-8">
              <div className="p-3 bg-primary-100 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                <Send size={20} className="text-primary-600 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-accent-900 mb-1">Send us a Message</h3>
                <p className="text-sm sm:text-base text-accent-600">We'll get back to you within 24 hours</p>
              </div>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start"
              >
                <CheckCircle size={20} className="text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-green-800 text-sm sm:text-base">Message sent successfully! We'll contact you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start"
              >
                <AlertCircle size={20} className="text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-red-800 text-sm sm:text-base">Something went wrong. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="w-full">
                  <label htmlFor="name" className="block text-sm font-medium text-accent-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative w-full">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 flex-shrink-0" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block text-sm font-medium text-accent-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative w-full">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 flex-shrink-0" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="w-full">
                  <label htmlFor="phone" className="block text-sm font-medium text-accent-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative w-full">
                    <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 flex-shrink-0" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                      placeholder="+977-9841234567"
                    />
                  </div>
                </div>

                {/* <div className="w-full">
                  <label htmlFor="service" className="block text-sm font-medium text-accent-700 mb-2">
                    Service Interest
                  </label>
                  <div className="relative w-full">
                    <Building size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 flex-shrink-0 z-10" />
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div> */}
              </div>

              <div className="w-full">
                <label htmlFor="subject" className="block text-sm font-medium text-accent-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  placeholder="What can we help you with?"
                />
              </div>

              <div className="w-full">
                <label htmlFor="message" className="block text-sm font-medium text-accent-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical text-sm sm:text-base"
                  placeholder="Tell us more about your investment goals and how we can help..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3 flex-shrink-0"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} className="ml-2 flex-shrink-0" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 w-full"
          >
            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6 w-full">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${info.color} flex-shrink-0`}
                    >
                      <info.icon size={20} className="text-white sm:w-6 sm:h-6" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-accent-900 mb-1 sm:mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm sm:text-base text-accent-600 mb-1 break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Schedule Meeting CTA */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 sm:p-8 text-white w-full"
            >
              <div className="flex items-start sm:items-center mb-4">
                <Calendar size={28} className="text-white mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg sm:text-xl font-bold mb-1">Schedule a Meeting</h4>
                  <p className="text-sm sm:text-base text-primary-100">Book a free consultation with our experts</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-primary-100 mb-4 sm:mb-6 leading-relaxed">
                Get personalized investment advice tailored to your financial goals. 
                Our certified advisors are ready to help you make informed decisions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center text-sm sm:text-base"
              >
                <Calendar size={18} className="mr-2 flex-shrink-0" />
                <span>Book Appointment</span>
              </motion.button>
            </motion.div> */}

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 w-full"
            >
              <h4 className="text-base sm:text-lg font-semibold text-accent-900 mb-4 flex items-center">
                <MapPin size={18} className="text-primary-600 mr-2 flex-shrink-0" />
                <span>Find Us</span>
              </h4>
              
              {/* Google Maps Embed */}
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.399642561279!2d85.31594317903739!3d27.70494456421077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190017ac507d%3A0xc32bb8832534e192!2sANM%20Print%20house!5e0!3m2!1sen!2snp!4v1750942647657!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Investment Guru Office Location - Durbar Marg, Kathmandu"
                  className="rounded-lg"
                />
              </div>
              
              {/* Map Info */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-accent-600 mb-1">
                  <strong className="text-accent-800">Address:</strong> Durbar Marg, Kathmandu, Nepal
                </p>
                <p className="text-sm text-accent-600">
                  <strong className="text-accent-800">Landmark:</strong> Near Kathmandu Guest House
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;