import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  // You can replace this with an actual Lottie animation JSON
  const developerAnimation = {
    "v": "5.5.7",
    "fr": 29.9700012207031,
    "ip": 0,
    "op": 140.000005698546,
    "w": 1920,
    "h": 1080,
    "nm": "Developer Animation",
    "ddd": 0,
    "assets": [],
    "layers": []
  };

  return (
    <section id="home" className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vishnu Priya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-8 max-w-2xl"
          >
            Driven IT Graduate & Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 mb-8 max-w-2xl leading-relaxed"
          >
            Passionate about solving real-world problems through innovative technology solutions. 
            Specializing in IoT, Machine Learning, and Full-Stack Development with a focus on 
            creating meaningful impact through code.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
          >
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail size={18} className="text-purple-600" />
              <span>vishnuk.1928@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={18} className="text-purple-600" />
              <span>+91 7995055221</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={18} className="text-purple-600" />
              <span>Hyderabad</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 text-sm sm:text-base font-medium"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base font-medium"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mt-6 lg:mt-8"
          >
            <a
              href="https://github.com" target='_blank'
              className="text-gray-500 hover:text-purple-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-priya-42343028a" target='_blank'
              className="text-gray-500 hover:text-purple-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Professional Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Professional Photo Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Photo Frame with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    {/* Profile Photo with proper fallback */}
                    <img 
                      src={profilePhoto} 
                      alt="Kandakatla Vishnu Priya" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Hide image and show fallback
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      onLoad={(e) => {
                        // Hide fallback when image loads successfully
                        e.target.nextSibling.style.display = 'none';
                      }}
                    />
                    {/* Fallback placeholder - hidden by default */}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-purple-600 text-8xl font-bold"
                      style={{ display: 'none' }}
                    >
                      V
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-400 rounded-full opacity-40"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-8 w-4 h-4 border border-purple-300 rounded-full opacity-50"
              />
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -left-4 w-8 h-8 border-2 border-purple-400 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 