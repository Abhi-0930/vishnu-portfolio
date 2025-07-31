import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Shield, Brain, Cpu } from 'lucide-react';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Detect mobile device for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Java", level: 85, color: "from-orange-500 to-red-500" },
        { name: "C", level: 80, color: "from-blue-500 to-purple-500" },
        { name: "JavaScript", level: 75, color: "from-yellow-400 to-orange-500" },
        { name: "Python", level: 70, color: "from-green-400 to-blue-500" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 85, color: "from-blue-500 to-purple-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "PHP", level: 70, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MySQL", level: 75, color: "from-blue-600 to-purple-600" },
        { name: "Database Design", level: 70, color: "from-green-500 to-blue-500" }
      ]
    },
    {
      title: "Specialized Technologies",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "IoT Development", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Arduino", level: 80, color: "from-cyan-500 to-blue-500" },
        { name: "Embedded C", level: 75, color: "from-green-500 to-teal-500" },
        { name: "Machine Learning", level: 70, color: "from-indigo-500 to-purple-500" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "Flask", level: 75, color: "from-green-600 to-blue-600" },
        { name: "React", level: 70, color: "from-blue-400 to-cyan-400" },
        { name: "Git", level: 80, color: "from-orange-500 to-red-500" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Shield className="w-8 h-8" />,
      skills: [
        { name: "Communication", level: 90, color: "from-pink-500 to-purple-500" },
        { name: "Time Management", level: 85, color: "from-green-500 to-blue-500" },
        { name: "Adaptability", level: 88, color: "from-yellow-500 to-orange-500" },
        { name: "Flexibility", level: 85, color: "from-purple-500 to-pink-500" }
      ]
    }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        delay: isMobile ? 0 : index * 0.05, 
        duration: isMobile ? 0.3 : 0.6 
      }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-purple-600 text-sm font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ 
            delay: isMobile ? 0.1 : (index * 0.05) + 0.3, 
            duration: isMobile ? 0.5 : 1, 
            ease: "easeOut" 
          }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
        >
          {!isMobile && <div className="absolute inset-0 bg-white/20 animate-pulse"></div>}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 w-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Technical <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and skills that enable me to build 
            innovative solutions and tackle complex challenges across various domains.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: isMobile ? categoryIndex * 0.1 : categoryIndex * 0.2, 
                duration: isMobile ? 0.4 : 0.8 
              }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="text-purple-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={skillIndex} 
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: isMobile ? 0.2 : 0.8, duration: isMobile ? 0.4 : 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "IoT Projects", value: "3+", icon: "🔧" },
              { title: "Programming Languages", value: "4+", icon: "💻" },
              { title: "Web Technologies", value: "6+", icon: "🌐" },
              { title: "Years Learning", value: "3+", icon: "📚" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: isMobile ? 0.3 + (index * 0.05) : 1 + (index * 0.1), 
                  duration: isMobile ? 0.3 : 0.6 
                }}
                className="bg-white/70 rounded-xl p-6 border border-gray-200 shadow-lg"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 text-sm">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;