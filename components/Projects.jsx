import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Users, Zap, Target, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Smart Hand Gesture Communication System",
      category: "IoT • Embedded C • Arduino • Assistive Tech",
      description: "An innovative IoT-based gesture recognition system designed to bridge communication gaps for individuals with hearing impairments.",
      achievements: [
        "🎯 88% accuracy across 15 common gestures",
        "⚡ <400ms end-to-end latency",
        "👥 80%+ user satisfaction rate",
        "🔧 5 distinct environment testing"
      ],
      highlights: [
        { icon: <Users className="w-5 h-5" />, label: "7 Users Tested", value: "Real Impact" },
        { icon: <Zap className="w-5 h-5" />, label: "15 Gestures", value: "Recognition" },
        { icon: <Target className="w-5 h-5" />, label: "88%", value: "Accuracy" }
      ],
      gradient: "from-blue-600 to-purple-600",
      image: "🤝",
      tech: ["IoT", "Arduino", "Embedded C", "Sensors"],
      githubUrl: "https://github.com/yourusername/gesture-communication-system"
    },
    {
      title: "AgriPredictx - Crop Yield Forecasting",
      category: "Python • Flask • ML • AgriTech",
      description: "A comprehensive machine learning application that predicts crop yields using environmental data to assist farmers in decision-making.",
      achievements: [
        "🌾 82% average prediction accuracy",
        "📊 500+ agricultural records processed",
        "🎯 24 crop types supported",
        "📈 20% reduction in forecasting error"
      ],
      highlights: [
        { icon: <TrendingUp className="w-5 h-5" />, label: "82%", value: "Accuracy" },
        { icon: <Users className="w-5 h-5" />, label: "20 Users", value: "Piloted" },
        { icon: <Target className="w-5 h-5" />, label: "7 Variables", value: "Environmental" }
      ],
      gradient: "from-green-600 to-blue-600",
      image: "🌱",
      tech: ["Python", "Flask", "Machine Learning", "Data Analysis"],
      githubUrl: "https://github.com/yourusername/agripredictx"
    },
    {
      title: "Online Book Store",
      category: "HTML • CSS • JavaScript • PHP • MySQL • E-Commerce",
      description: "A full-stack e-commerce web application featuring secure authentication, real-time search, and optimized performance.",
      achievements: [
        "📚 250+ book records managed",
        "💳 100+ test transactions logged",
        "⚡ 35% page load time improvement",
        "📈 40% increased user engagement"
      ],
      highlights: [
        { icon: <Zap className="w-5 h-5" />, label: "35%", value: "Faster Loading" },
        { icon: <Users className="w-5 h-5" />, label: "15 Participants", value: "User Testing" },
        { icon: <Target className="w-5 h-5" />, label: "40%", value: "Engagement ↑" }
      ],
      gradient: "from-purple-600 to-pink-600",
      image: "📚",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/yourusername/online-bookstore"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 w-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions that demonstrate my passion for creating technology that makes a real difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-6xl opacity-20 transform translate-x-4 -translate-y-2">
                  {project.image}
                </div>
                <div className="relative z-10">
                  <div className="text-white/80 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/90 leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex justify-center text-purple-600 mb-2">
                        {highlight.icon}
                      </div>
                      <div className="text-purple-600 font-bold text-sm">{highlight.label}</div>
                      <div className="text-gray-700 text-xs">{highlight.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-800 font-semibold mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-gray-700 text-sm">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-800 font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 py-2 px-6 rounded-lg hover:from-purple-200 hover:to-blue-200 transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-medium border border-purple-200"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-purple-200 shadow-lg">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-6xl mb-6"
              >
                🚀
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Want to see more?
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Explore my complete portfolio of projects, experiments, and contributions on GitHub. 
                From small utilities to complex applications, discover the full range of my technical expertise.
              </p>
              
              <div className="flex justify-center">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-8 py-4 rounded-full hover:from-purple-200 hover:to-blue-200 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 border border-purple-200"
                >
                  <Github size={24} />
                  <span>View All Projects on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;