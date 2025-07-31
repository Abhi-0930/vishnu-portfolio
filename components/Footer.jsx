import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-gray-200 w-screen">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kandakatla Vishnu Priya</h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Driven IT graduate passionate about creating innovative technology solutions 
                that solve real-world problems and make a meaningful impact.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-gray-800 mb-4">Connect</h4>
            <div className="flex space-x-3 mb-6">
              {[
                { icon: <Github size={20} />, href: "https://github.com/vishnukandakatla", name: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/vishnu-priya-42343028a", name: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:vishnuk.1928@gmail.com", name: "Email" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-200 text-gray-600 hover:text-purple-600 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center text-gray-600 text-sm mb-4 md:mb-0">
            <span>© 2025 Kandakatla Vishnu Priya.</span>
           
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;