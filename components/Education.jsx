import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const educationData = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Gokaraju Rangaraju Institute Of Engineering and Technology",
      location: "Hyderabad, India",
      duration: "2022 - 2026",
      grade: "8.43 SGPA",
      status: "Current",
      description: "Specializing in modern software development, IoT systems, and emerging technologies with focus on practical application and innovation.",
      gradient: "from-blue-600 to-purple-600",
      icon: "🎓"
    },
    {
      degree: "Intermediate (MPC Stream)",
      institution: "Narayana Junior College",
      location: "Hyderabad, India",
      duration: "2020 - 2022",
      grade: "9.86 CGPA",
      status: "Completed",
      description: "Comprehensive study in Mathematics, Physics, and Chemistry providing strong analytical and problem-solving foundation.",
      gradient: "from-green-600 to-blue-600",
      icon: "📐"
    },
    {
      degree: "10th Class (SSC)",
      institution: "Little Flower High School",
      location: "Hyderabad, India",
      duration: "2019 - 2020",
      grade: "10.0 CGPA",
      status: "Completed",
      description: "Perfect academic record demonstrating dedication, consistency, and excellence across all subjects.",
      gradient: "from-yellow-600 to-orange-600",
      icon: "🏆"
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 w-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
            Educational <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            A foundation built on academic excellence, continuous learning, and consistent performance
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {educationData.map((education, index) => (
            <motion.div
              key={education.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="flex items-center mb-12 relative"
            >
              {index < educationData.length - 1 && (
                <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-purple-500 to-transparent transform -translate-x-1/2 z-0"></div>
              )}

              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
                className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${education.gradient} rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-10 border-4 border-slate-900`}
              >
                {education.icon}
              </motion.div>

              <div className={`w-full flex ${index % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                <div className={`w-full max-w-lg bg-gradient-to-br from-white to-purple-50/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${education.status === 'Current' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                          {education.status}
                        </span>
                        <div className="flex items-center text-purple-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {education.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{education.degree}</h3>
                      <div className="flex items-center text-gray-700 text-sm mb-2">
                        <GraduationCap size={14} className="mr-2 text-purple-600" />
                        {education.institution}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <MapPin size={14} className="mr-2 text-purple-600" />
                        {education.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        <Award size={16} className="mr-1" />
                        <span className="font-bold">{education.grade}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;