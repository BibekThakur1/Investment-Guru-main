import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserRound, Rocket, Users, TrendingUp, DollarSign, Shield, AlarmClock , } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, label: 'Industry Awards', value: '25+' },
    { icon: Users, label: 'Expert Advisors', value: '50+' },
    { icon: TrendingUp, label: 'Assets Under Management', value: '$2.5B+' },
    { icon: Shield, label: 'Client Satisfaction', value: '98%' },
  ];

  const values = [
    {
      icon: AlarmClock ,
      title: 'Real-time Market Analysis',
      description: 'We deliver precise, data-driven insights and expert market interpretation to help clients stay ahead of trends and identify smart opportunities in the stock market.'
    },
    {
      icon: DollarSign,
      title: 'Stock Market Training',
      description: 'Our structured training programs are offered both online and through physical workshops, making it convenient for learners across all regions. These programs are designed to simplify complex market concepts and teach actionable skills.'
    },
    {
      icon: UserRound,
      title: 'Personal Consultations',
      description: 'We provide one-on-one guidance tailored to individual goals, helping clients build and refine their trading or investing strategies.'
    },
    {
      icon: Rocket,
      title: 'Strategy Building & Planning',
      description: 'Our experts work closely with clients to develop personalized strategies that align with their financial goals, risk profiles, and market outlooks.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6"
          >
            <Shield size={16} className="mr-2" />
            About Investment Guru
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            Building Wealth Through
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Expert Guidance</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-accent-900 mb-6">
              5+ Years of Investment Excellence
            </h3>
            
            <p className="text-lg text-accent-600 mb-6 leading-relaxed">
              Investment Guru is a forward-thinking financial education and consulting company dedicated to reshape the way individuals understand and participate in the share market. With a focus on in-depth market analysis, comprehensive training, and personalized mentorship, we provide a full spectrum of services aimed at empowering individuals to make informed, confident, and strategic investment decisions.
            </p>

            <p className="text-lg text-accent-600 mb-8 leading-relaxed">
              Founded with a clear mission — to make the share market simple and easy for everyone — Investment Guru has positioned itself as a trusted partner for beginners, intermediate traders, and seasoned investors alike. We believe that financial literacy is not a privilege but a necessity, and we are committed to making high-quality stock market education accessible to all, regardless of background or experience.
            </p>

            {/* Key Points */}
            {/* <div className="space-y-4 mb-8">
              {[
                'Registered with Securities Board of Nepal (SEBON)',
                'ISO 9001:2015 Certified Investment Advisory',
                'Member of Nepal Investment Board',
                'Award-winning customer service team'
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                  <span className="text-accent-700">{point}</span>
                </motion.div>
              ))}
            </div> */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content - Logo and Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-2xl">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex justify-center mb-6"
              >
                <img 
                  src="/510635494_29975439058770470_7431767674793111893_n.jpg" 
                  alt="Investment Guru" 
                  className="w-64 h-64 object-contain drop-shadow-lg"
                />
              </motion.div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-accent-900 mb-2">Investment Guru</h4>
                <p className="text-accent-600">Because every investor needs a guru.</p>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-primary-100 rounded-full mb-4">
                <achievement.icon size={32} className="text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-accent-900 mb-2">{achievement.value}</div>
              <div className="text-accent-600 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-accent-900 mb-12">Our Services Include</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-flex p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
                >
                  <value.icon size={32} className="text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-accent-900 mb-4">{value.title}</h4>
                <p className="text-accent-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;