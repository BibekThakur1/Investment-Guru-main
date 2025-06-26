import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    // 'Services': [
    //   { name: 'Portfolio Management', href: '#services' },
    //   { name: 'Investment Planning', href: '#services' },
    //   { name: 'Risk Management', href: '#services' },
    //   { name: 'Retirement Planning', href: '#services' },
    //   { name: 'Tax Advisory', href: '#services' },
    //   { name: 'Market Analysis', href: '#services' }
    // ],
    'Company': [
      { name: 'Courses', href: '#services' },
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      // { name: 'Careers', href: '/careers' },
      // { name: 'News & Updates', href: '/news' },
      { name: 'Contact Us', href: '#contact' },
      // { name: 'Privacy Policy', href: '/privacy' }
    ]
    // 'Resources': [
    //   { name: 'Investment Guide', href: '/guide' },
    //   { name: 'Market Reports', href: '/reports' },
    //   { name: 'Financial Calculator', href: '/calculator' },
    //   { name: 'Blog', href: '/blog' },
    //   { name: 'Webinars', href: '/webinars' },
    //   { name: 'FAQ', href: '/faq' }
    // ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61577410238664', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-accent-900 to-accent-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/510635494_29975439058770470_7431767674793111893_n.jpg" 
                  alt="Investment Guru Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold">Investment Guru</h3>
                  <p className="text-accent-300">Because every investor needs a guru.</p>
                </div>
              </div>
              
              <p className="text-accent-300 mb-6 leading-relaxed">
                Your trusted partner in building wealth and securing financial freedom. 
                With over 15 years of experience, we provide expert investment guidance 
                tailored to your unique financial goals.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-primary-400" />
                  <span className="text-accent-300">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary-400" />
                  <span className="text-accent-300">+977-1-4567890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary-400" />
                  <span className="text-accent-300">info@investmentguru.com.np</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href={link.href}
                        className="text-accent-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-accent-700 py-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-accent-300">
                Get the latest market insights and investment tips delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-accent-800 border border-accent-600 text-white placeholder-accent-400 focus:outline-none focus:border-primary-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-accent-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-400 text-sm mb-4 md:mb-0">
              © 2024 Investment Guru. All rights reserved. | Licensed by SEBON
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-2 bg-accent-800 rounded-full text-accent-400 hover:text-primary-400 hover:bg-accent-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;