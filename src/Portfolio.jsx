import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Phone, MapPin, Moon, Sun } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (window.scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.dataset.animate]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'];

  const projects = [
    {
      title: 'Pitchify',
      description: 'Architected and developed a microservices-based entrepreneurship and investment platform using Docker and Kubernetes with real-time communication.',
      tech: ['TypeScript', 'React.js', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'AWS', 'Stripe', 'Docker', 'Kubernetes'],
      link: 'https://github.com/nazeeh4611/PITCHIFY',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'BESPOKE',
      description: 'Developed a comprehensive e-commerce application with secure Razorpay integration and deployed using Docker and Kubernetes.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'Kubernetes', 'Razorpay', 'Passport.js', 'Google OAuth2'],
      link: 'https://github.com/nazeeh4611/BESPOKE',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Wavescation',
      description: 'Built a Dubai-based staycation booking platform with advanced search filtering and real-time availability management.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Tailwind CSS', 'Payment Gateway'],
      link: 'https://wavescation.com',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Foscape',
      description: 'Created a dual-purpose platform for aquarium setup booking and e-commerce with comprehensive product catalog.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Cloudinary', 'Tailwind CSS'],
      link: 'https://foscape.com',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'FLYBUYBRAND',
      description: 'Architected a multi-vendor e-commerce platform with WhatsApp API integration and role-based access control.',
      tech: ['React.js', 'Node.js', 'WhatsApp API', 'MongoDB Atlas', 'AWS EC2', 'AWS S3'],
      link: 'https://flybuybrand.com',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'C', 'C++']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Socket.io', 'gRPC', 'JWT', 'Cron Jobs', 'Morgan']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'EJS', 'jQuery']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS (EC2, S3, CloudFront)', 'Jenkins', 'CI/CD', 'Nginx', 'PM2', 'Git']
    },
    {
      title: 'Tools & APIs',
      skills: ['Stripe', 'Razorpay', 'Google Auth', 'Passport.js', 'WhatsApp API', 'Postman', 'Figma', 'Cloudinary', 'Multer']
    }
  ];

  const bgClass = isDark ? 'bg-slate-950' : 'bg-gray-50';
  const textClass = isDark ? 'text-gray-100' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'bg-slate-900' : 'bg-white';
  const navBgClass = isDark ? 'bg-slate-900/95' : 'bg-white/95';
  const accentClass = isDark ? 'from-blue-500 to-purple-600' : 'from-blue-600 to-purple-700';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500`}>
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`fixed top-0 left-0 right-0 ${navBgClass} backdrop-blur-lg z-40 border-b ${isDark ? 'border-slate-800' : 'border-gray-200'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hidden md:block text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.toLowerCase()
                      ? isDark ? 'text-white' : 'text-gray-900'
                      : secondaryTextClass
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center" data-animate="home">
            <div
              className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${accentClass} rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl ${
                visibleElements.has('home') ? 'animate-bounce-slow' : 'opacity-0'
              } transition-all duration-1000`}
            >
              NN
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                visibleElements.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-1000 delay-200`}
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Nazeeh Nahaban
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl ${secondaryTextClass} mb-8 max-w-3xl mx-auto ${
                visibleElements.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-1000 delay-400`}
            >
              A Full-Stack Developer specializing in MERN Stack, I enjoy building scalable Web Applications with
              exceptional user experiences.
            </p>
            <div
              className={`flex justify-center space-x-6 mb-12 ${
                visibleElements.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-1000 delay-600`}
            >
              <a
                href="https://github.com/nazeeh4611"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 hover:scale-110`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nazeeh-nahaban"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 hover:scale-110`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:nazeehnahaban09@gmail.com"
                className={`p-3 rounded-full ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 hover:scale-110`}
              >
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 bg-gradient-to-r ${accentClass} rounded-full text-white font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                visibleElements.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } delay-800`}
            >
              Contact me here →
            </button>
          </div>
        </section>

        <section id="about" className="py-32">
          <h2
            data-animate="about-title"
            className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
              visibleElements.has('about-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            About Me
          </h2>
          <div
            data-animate="about-content"
            className={`max-w-4xl mx-auto space-y-6 text-lg ${secondaryTextClass} leading-relaxed ${
              visibleElements.has('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-200`}
          >
            <p>
              I'm Nazeeh Nahaban, a self-taught Full Stack Developer passionate about building scalable and efficient solutions. My journey into tech has been driven by curiosity and hands-on learning, focusing on the MERN stack and modern web technologies.
            </p>
            <p>
              I've gained practical experience with JavaScript, TypeScript, Node.js, Express.js, React.js, MongoDB, PostgreSQL, Redis, Docker, Kubernetes, and RESTful APIs. Comfortable working across both frontend and backend, I enjoy creating clean, efficient code and reliable, maintainable systems.
            </p>
            <p>
              Currently, I work as a freelance Full Stack Developer at Nacrosoft Technologies, where I develop enterprise-level web applications, collaborate with cross-functional teams, and implement modern development practices including CI/CD pipelines and cloud deployment. This role has strengthened my ability to solve problems holistically while deepening my knowledge and passion for impactful software solutions.
            </p>
          </div>
        </section>

        <section id="projects" className="py-32">
          <h2
            data-animate="projects-title"
            className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
              visibleElements.has('projects-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                data-animate={`project-${idx}`}
                className={`group ${cardBgClass} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border ${isDark ? 'border-slate-800' : 'border-gray-200'} ${
                  visibleElements.has(`project-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
                    >
                      <span>View Project</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className={`${secondaryTextClass} mb-4 leading-relaxed`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-3 py-1 ${isDark ? 'bg-slate-800' : 'bg-gray-200'} rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-32">
          <h2
            data-animate="skills-title"
            className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
              visibleElements.has('skills-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                data-animate={`skill-${idx}`}
                className={`${cardBgClass} rounded-2xl p-6 border ${isDark ? 'border-slate-800' : 'border-gray-200'} hover:shadow-xl transition-all duration-500 ${
                  visibleElements.has(`skill-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full text-sm transition-colors duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-32">
          <h2
            data-animate="experience-title"
            className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
              visibleElements.has('experience-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            Experience
          </h2>
          <div
            data-animate="experience-content"
            className={`max-w-4xl mx-auto ${cardBgClass} rounded-2xl p-8 border ${isDark ? 'border-slate-800' : 'border-gray-200'} hover:shadow-xl transition-all duration-500 ${
              visibleElements.has('experience-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${accentClass} flex items-center justify-center flex-shrink-0`}>
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">Full Stack Developer (Freelance)</h3>
                    <p className={secondaryTextClass}>Nacrosoft Technologies Pvt Ltd, Kerala</p>
                  </div>
                  <span className={`${secondaryTextClass} text-sm whitespace-nowrap ml-4`}>Oct 2023 - Present</span>
                </div>
                <p className={`${secondaryTextClass} leading-relaxed`}>
                  Contributing to full-stack web application development—designing scalable architectures, building features, integrating APIs, and implementing CI/CD pipelines. This role has deepened my frontend and backend skills and strengthened my understanding of enterprise software development and team collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-32">
          <h2
            data-animate="education-title"
            className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
              visibleElements.has('education-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            Education & Training
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: 'MERN Stack Development',
                institution: 'Brototype, Kerala',
                period: 'Oct 2023 - Present',
                description: 'Completed intensive full-stack program, built multiple full-scale projects, mentored junior developers, and gained hands-on experience with modern web technologies and best practices.'
              },
              {
                title: 'Bachelor of Computer Applications (BCA)',
                institution: 'Amity University',
                period: 'Oct 2025 - Present',
                description: 'Pursuing computer science fundamentals, strengthening analytical and problem-solving skills.'
              },
              {
                title: 'Higher Secondary Education (Computer Science)',
                institution: 'SNMHSS, Parappanangadi',
                period: 'May 2023',
                description: 'Completed foundational coursework in computer science, building a strong base for software development.'
              }
            ].map((edu, idx) => (
              <div
                key={idx}
                data-animate={`education-${idx}`}
                className={`${cardBgClass} rounded-2xl p-6 border ${isDark ? 'border-slate-800' : 'border-gray-200'} hover:shadow-xl transition-all duration-500 ${
                  visibleElements.has(`education-${idx}`) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{edu.title}</h3>
                    <p className={secondaryTextClass}>{edu.institution}</p>
                  </div>
                  <span className={`${secondaryTextClass} text-sm whitespace-nowrap ml-4`}>{edu.period}</span>
                </div>
                <p className={`${secondaryTextClass} leading-relaxed`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-32">
          <h2
            data-animate="contact-title"
            className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
              visibleElements.has('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            Let's Connect
          </h2>
          <div
            data-animate="contact-content"
            className={`max-w-2xl mx-auto text-center ${
              visibleElements.has('contact-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-200`}
          >
            <p className={`${secondaryTextClass} text-lg mb-8`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <a
                href="mailto:nazeehnahaban09@gmail.com"
                className={`flex items-center space-x-2 ${secondaryTextClass} hover:text-blue-500 transition-colors duration-300`}
              >
                <Mail size={20} />
                <span>nazeehnahaban09@gmail.com</span>
              </a>
              <a
                href="tel:9207904611"
                className={`flex items-center space-x-2 ${secondaryTextClass} hover:text-blue-500 transition-colors duration-300`}
              >
                <Phone size={20} />
                <span>920 790 4611</span>
              </a>
              <div className={`flex items-center space-x-2 ${secondaryTextClass}`}>
                <MapPin size={20} />
                <span>Calicut, Kerala</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/nazeeh4611"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full font-medium transition-all duration-300 hover:scale-105`}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nazeeh-nahaban"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full font-medium transition-all duration-300 hover:scale-105`}
              >
                LinkedIn
              </a>
              <a
                href="mailto:nazeehnahaban09@gmail.com"
                className={`px-6 py-3 bg-gradient-to-r ${accentClass} rounded-full text-white font-medium hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                Email Me
              </a>
            </div>
          </div>
        </section>

        <footer className={`py-12 text-center ${secondaryTextClass} border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
          <p className="text-sm">© 2025 Nazeeh Nahaban. All rights reserved.</p>
        </footer>
      </main>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}