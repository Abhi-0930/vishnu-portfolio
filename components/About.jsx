import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Maintaining 8.43 SGPA in B.Tech Information Technology",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Success",
      description: "88% accuracy in IoT gesture recognition system",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Impact",
      description: "80%+ satisfaction rate in assistive technology projects",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Developing solutions for real-world problems",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 w-screen relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driven by passion for innovation and a commitment to creating meaningful technological solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
                              <p className="text-gray-700 leading-relaxed mb-4">
                  As a driven IT graduate from Gokaraju Rangaraju Institute of Engineering and Technology, 
                  I'm passionate about leveraging technology to solve real-world problems. My journey has been 
                  shaped by hands-on experience with cutting-edge technologies including IoT, Machine Learning, 
                  and Full-Stack Development.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  What sets me apart is my ability to bridge the gap between technical complexity and practical 
                  solutions. Whether it's developing assistive technology for hearing-impaired individuals or 
                  creating ML models for agricultural forecasting, I focus on creating meaningful impact through code.
                </p>
                <p className="text-gray-700 leading-relaxed">
                I thrive in collaborative environments where continuous learning meets innovation, and I'm 
                always eager to take on new challenges that push the boundaries of what's possible with technology.
              </p>
            </div>

            {/* Key Qualities */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Problem Solver", value: "✨" },
                { label: "Team Player", value: "🤝" },
                { label: "Fast Learner", value: "🚀" },
                { label: "Innovation Focused", value: "💡" }
              ].map((quality, index) => (
                <motion.div
                  key={quality.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                  className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-4 text-center border border-purple-500/30"
                >
                  <div className="text-2xl mb-2">{quality.value}</div>
                  <div className="text-gray-700 text-sm font-medium">{quality.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Key Achievements</h3>
            
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                className="bg-gradient-to-br from-white to-blue-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${highlight.gradient} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{highlight.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Personal Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-3">My Philosophy</h4>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "Technology should serve humanity. Every line of code I write is an opportunity 
                to make someone's life better, solve a pressing problem, or open new possibilities 
                for innovation."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;