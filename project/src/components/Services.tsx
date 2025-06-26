import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Shield, Target, Users, BookOpen, DollarSign, BarChart3, Sparkles, Move, Undo2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Stock Market 101: Decode the Basics',
      description: 'Professional portfolio management tailored to your risk tolerance and financial goals.',
      features: ['Diversified Investments', 'Risk Assessment', 'Regular Rebalancing'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: PieChart,
      title: 'Advance Course: Technical Analysis Mastery',
      description: 'Strategic investment planning to maximize returns and minimize risks for long-term growth.',
      features: ['Goal-Based Planning', 'Asset Allocation', 'Tax Optimization'],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Sparkles,
      title: 'Basic to Advance course: Complete Transformation Program',
      description: 'Comprehensive risk assessment and mitigation strategies to protect your investments.',
      features: ['Risk Analysis', 'Insurance Planning', 'Emergency Funds'],
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Move,
      title: 'Pro Trader: Mastering the Market Moves',
      description: 'Secure your future with our comprehensive retirement planning and wealth preservation.',
      features: ['Pension Planning', 'Wealth Preservation', 'Income Strategies'],
      color: 'from-primary-600 to-secondary-500'
    },
    {
      icon: Undo2,
      title: 'From Loss to Profit: The Recovery Course',
      description: 'Expert tax planning and advisory services to optimize your investment returns.',
      features: ['Tax Planning', 'Deduction Strategies', 'Compliance Support'],
      color: 'from-secondary-600 to-primary-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
          >
            <Users size={16} className="mr-2" />
            Our Courses
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            Empower Your 
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Trading </span>
            Journey
          </h2>
          
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            From foundational knowledge to advanced strategies and recovery techniques, our comprehensive suite of courses is designed to equip you with the skills to confidently navigate the stock market and achieve your financial goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-accent-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-accent-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.1) + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center text-accent-700"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Get personalized investment advice from our expert team. Schedule a free consultation today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;