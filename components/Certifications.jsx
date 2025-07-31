import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Building } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const certifications = [
    {
      title: "AWS Cloud Foundations",
      provider: "Amazon Web Services",
      description: "Comprehensive certification covering AWS cloud concepts, core services, security architecture, pricing models, and support frameworks.",
      skills: ["AWS Core Services", "Cloud Architecture", "Security Best Practices", "Cost Optimization", "Support Models"],
      badge: "☁️",
      gradient: "from-orange-500 to-yellow-500",
      category: "Cloud Computing"
    },
    {
      title: "Data Science for Engineers",
      provider: "NPTEL",
      description: "Intensive 8-week program covering comprehensive data science fundamentals including data wrangling, statistical analysis, machine learning, and visualization.",
      skills: ["Data Wrangling", "Statistical Analysis", "Machine Learning Basics", "Data Visualization", "Python Programming"],
      badge: "📊",
      gradient: "from-blue-500 to-purple-500",
      category: "Data Science"
    },
    {
      title: "Fundamentals of Cyber Security",
      provider: "Zscaler",
      description: "Essential cybersecurity principles covering network security, threat detection, risk assessment, and modern cloud-based security practices.",
      skills: ["Network Security", "Threat Detection", "Risk Assessment", "Cloud Security", "Security Frameworks"],
      badge: "🔒",
      gradient: "from-red-500 to-pink-500",
      category: "Cybersecurity"
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 w-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Continuous learning through industry-recognized certifications in cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-white to-pink-50/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${certification.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-6xl opacity-20 transform translate-x-4 -translate-y-2">
                  {certification.badge}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {certification.category}
                    </span>
                    <Award className="w-6 h-6 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{certification.title}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <Building size={14} className="mr-2" />
                    {certification.provider}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {certification.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-gray-800 font-semibold text-sm mb-3">Skills Acquired</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {certification.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-gray-700 text-xs">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
                  <ExternalLink size={14} />
                  <span>View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;