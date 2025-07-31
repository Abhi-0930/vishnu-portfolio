import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("gbknRmypbVg2Cc9o1"); // You'll need to replace this with your actual EmailJS public key
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'vishnuk.1928@gmail.com' // Your email address
      };

      await emailjs.send(
        'service_6vpnoe3', // EmailJS service ID
        'template_1ud0e07', // EmailJS template ID
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 w-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you and explore how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                                          name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-white focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200"
                >
                  <CheckCircle size={18} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200"
                >
                  <AlertCircle size={18} />
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: "Email", value: "vishnuk.1928@gmail.com", link: "mailto:vishnuk.1928@gmail.com" },
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+91 7995055221", link: "tel:+917995055221" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Hyderabad, India", link: "#" }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                    className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium">{contact.title}</h4>
                      <p className="text-gray-600 text-sm">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;