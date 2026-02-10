import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Menu, X, ArrowRight, Download, Phone, Calendar, MapPin, Users, Code, Zap, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import y from "./assets/y.png";
import v from "./assets/v.png";
import s from "./assets/s.png";
import b from "./assets/b.png";
import f from "./assets/f.png";
import p from "./assets/p.png";
import d from "./assets/d.png";
import a from "./assets/a.png";
import c from "./assets/c.png";
import Nazeeh_Nahaban from "./assets/Nazeeh_Nahaban.pdf";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      title: 'Wavescation',
      description: 'Dubai-based staycation booking platform with AFS payment gateway integration and complete management system for both users and admins.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'AFS Payment', 'Docker', 'Google Cloud Run'],
      link: 'https://www.wavescation.com/',
      image: v,
      location: 'Dubai, UAE',
      type: 'Booking Platform',
      features: ['Real-time availability', 'AFS Payment Gateway', 'Admin Dashboard', 'Booking Management'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'ecommerce'
    },
    {
      title: 'Eventra',
      description: 'Dubai-based platform for booking events, parties, and hosting social gatherings with complete event management system and ticketing.',
      tech: ['MERN Stack', 'Stripe Payments', 'AWS S3', 'Redis', 'Docker'],
      link: 'https://www.eventra.club/',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800',
      location: 'Dubai, UAE',
      type: 'Event Booking Platform',
      features: ['Event Booking System', 'Party Hosting', 'Ticketing', 'Real-time Updates', 'Social Features'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'platform'
    },
    {
      title: 'Dubai Communities',
      description: 'Mobile application for connecting communities in Dubai, enabling users to host meetups, join existing communities, and participate in local events.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'Socket.io'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800',
      location: 'Dubai, UAE',
      type: 'Community Mobile App',
      features: ['Community Creation', 'Meetup Hosting', 'Event Discovery', 'Real-time Chat', 'Push Notifications'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'mobile'
    },
    {
      title: 'Simpolo Trading',
      description: 'Tiles and sanitary trading company platform with complete admin management, product listing, and inquiry setup for Dubai and Sharjah markets.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'AWS', 'Docker'],
      link: 'https://simpolotrading.com/',
      image: s,
      location: 'Dubai & Sharjah, UAE',
      type: 'E-commerce',
      features: ['Product Management', 'Order Tracking', 'Admin Panel', 'Inventory System'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'ecommerce'
    },
    {
      title: 'Foscape Aquatic Care',
      description: 'Complete e-commerce and service platform for aquatic solutions and landscaping company based in Kerala, India.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'AWS S3', 'Cloudinary'],
      link: 'https://www.thefoscape.com/',
      image: c,
      location: 'Kerala, India',
      type: 'E-commerce & Services',
      features: ['Service Booking', 'E-commerce', 'Team Management', 'Product Catalog'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'services'
    },
    {
      title: 'DD Events UAE',
      description: 'Event management company platform based in Abu Dhabi, UAE with booking system and gallery management.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'AWS'],
      link: 'https://www.ddeventsuae.com/',
      image: d,
      location: 'Abu Dhabi, UAE',
      type: 'Event Management',
      features: ['Event Booking', 'Gallery Management', 'Client Dashboard', 'Service Packages'],
      year: '2023',
      role: 'Full Stack Developer',
      category: 'services'
    },
    {
      title: 'Arren Medical Clinic',
      description: 'Complete clinic management solution for a company based in Saudi Arabia with patient management and appointment system.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind', 'AWS'],
      link: 'https://arren-ksa-frontend.vercel.app/',
      image: a,
      location: 'Saudi Arabia',
      type: 'Clinic Management',
      features: ['Patient Management', 'Appointment System', 'Medical Records', 'Billing'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'healthcare'
    },
    {
      title: 'Pitchify',
      description: 'Platform connecting entrepreneurs and investors through video pitching with video call, chat options, and Stripe payment gateway.',
      tech: ['MERN Stack', 'Socket.io', 'WebRTC', 'Redis', 'Docker', 'Stripe'],
      link: 'https://pitchify-frontend.vercel.app/',
      image: p,
      location: 'Global',
      type: 'Startup Platform',
      features: ['Video Pitching', 'Real-time Chat', 'Stripe Payments', 'Investor Network'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'platform'
    },
    {
      title: 'Flybuybrand',
      description: 'Multi-vendor e-commerce platform for clothing, accessories, and home appliances based in Kerala, India and Dubai.',
      tech: ['React.js', 'Node.js', 'MongoDB Atlas', 'WhatsApp API', 'Razorpay', 'AWS'],
      link: 'https://flybuybrand.com/',
      image: f,
      location: 'Kerala & Dubai',
      type: 'Multi-vendor E-commerce',
      features: ['Multi-vendor', 'WhatsApp Integration', 'Seller Dashboard', 'Affiliate System'],
      year: '2024',
      role: 'Full Stack Developer',
      category: 'ecommerce'
    },
    {
      title: 'Bespoke Shopping',
      description: 'Complete e-commerce platform with server-side rendering and elegant UI for clothing and fashion products.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'Docker', 'Kubernetes'],
      link: 'https://bespoke-gwop.onrender.com',
      image: b,
      location: 'Global',
      type: 'E-commerce',
      features: ['Social Login', 'Wishlist', 'Order Management', 'Admin Panel'],
      year: '2023',
      role: 'Full Stack Developer',
      category: 'ecommerce'
    },
    {
      title: 'Ayurcare Wellness',
      description: 'Services listing website with modern UI for wellness center based in Kerala, showcasing treatments and bookings.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      link: 'https://ayurcare-wellness.vercel.app/',
      image: y,
      location: 'Kerala, India',
      type: 'Wellness Platform',
      features: ['Service Listings', 'Booking System', 'Responsive Design', 'Contact Management'],
      year: '2024',
      role: 'Frontend Developer',
      category: 'healthcare'
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "FlyHomes Associates - Remote",
      period: "Dec 2024 - Jan 2026",
      description: "Led development of UAE-based platforms including staycation booking and B2B trading systems with secure payment integrations.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Full Stack Developer (Freelance)",
      company: "Multiple International Clients",
      period: "Jan 2024 - Dec 2024",
      description: "Developed scalable web applications for UAE, KSA, and Indian clients using MERN stack. Implemented payment gateways and cloud deployment solutions.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "MERN Stack Developer",
      company: "Brototype - Calicut, Kerala",
      period: "May 2023 - Dec 2024",
      description: "Built e-commerce platforms and property management systems while exploring microservices architecture.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const services = [
    { title: "Website Development", description: "Custom-built websites tailored to your vision.", icon: "🛠️" },
    { title: "SEO Optimized", description: "Engineered for better visibility and higher rankings.", icon: "🔍" },
    { title: "Modern Design", description: "Clean, contemporary UI that reflects your brand.", icon: "🎨" },
    { title: "Responsive", description: "Perfect experience across devices and screen sizes.", icon: "📱" },
    { title: "API Integration", description: "Third-party services and APIs integration.", icon: "🔌" },
    { title: "Support & Maintenance", description: "Ongoing support to keep projects functional.", icon: "⚙️" }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const currentProject = filteredProjects[activeProject];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setActiveProject(0);
  }, [activeFilter]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = Nazeeh_Nahaban;
    link.download = 'Nazeeh_Nahaban_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextProject = () => {
    if (isAnimating || filteredProjects.length === 0) return;
    setIsAnimating(true);
    setActiveProject((prev) => (prev + 1) % filteredProjects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating || filteredProjects.length === 0) return;
    setIsAnimating(true);
    setActiveProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const scrollToProject = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.08), transparent 40%)`
        }}
      />

      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-slate-200 dark:border-slate-800' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              NN
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Projects', 'About', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={downloadCV}
                className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all duration-300 text-sm font-medium flex items-center gap-2 border border-slate-200 dark:border-slate-700"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-500/25"
              >
                Book a Call
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Projects', 'About', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={downloadCV}
                className="w-full px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['⚛', '▲', '◆', 'TS', 'M', '🐳', '☁', 'T'].map((icon, index) => (
            <div
              key={index}
              className="absolute w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-2xl bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-blue-500/20 dark:border-blue-400/20"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-800">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
              Based in Dubai • Available Worldwide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Hello, I'm Nazeeh Nahaban
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Self-taught Full-Stack Developer transforming ideas into production-ready web applications. Expert in the complete MERN stack with hands-on experience in secure API design, Docker containerization, and cloud deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={downloadCV}
              className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-sm">nazeehnahaban09@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm">+971 50 788 9313</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What I Provide
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-blue-950/20 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Self-taught Full-Stack Developer transforming ideas into production-ready web applications. Expert in the complete MERN stack with hands-on experience in secure API design, Docker containerization, and cloud deployment.
              </p>
              <p>
                Successfully delivered functional, scalable solutions for UAE and global clients by bridging technical knowledge with practical implementation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Browse through my latest work. Use the filters below to explore specific categories.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                <span>All Projects</span>
                <span className="text-xs opacity-70">({projects.length})</span>
              </button>
              {['ecommerce', 'services', 'healthcare', 'platform', 'mobile'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600">
                        {currentProject.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-blue-500 text-white text-sm font-medium">
                        {currentProject.type}
                      </span>
                    </div>
                    {currentProject.link === '#' && (
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1.5 rounded-full bg-amber-500 text-white text-sm font-medium">
                          Development Phase
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Project {activeProject + 1} of {filteredProjects.length}</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                          {currentProject.title}
                        </h3>
                      </div>
                      {currentProject.link !== '#' ? (
                        <a
                          href={currentProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Visit</span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                          <span className="text-sm font-medium">In Development</span>
                        </div>
                      )}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                      {currentProject.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Key Features</div>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm border border-slate-200 dark:border-slate-600"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Technologies Used</div>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={prevProject}
                    disabled={isAnimating}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 disabled:opacity-50 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="font-medium">Previous</span>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {filteredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToProject(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeProject
                            ? 'w-8 bg-blue-500'
                            : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextProject}
                    disabled={isAnimating}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 disabled:opacity-50 transition-all"
                  >
                    <span className="font-medium">Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Project Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Location</div>
                        <div className="font-medium">{currentProject.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Year</div>
                        <div className="font-medium">{currentProject.year}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Role</div>
                        <div className="font-medium">{currentProject.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Quick Project View</h4>
                  <div className="space-y-3">
                    {filteredProjects.map((project, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToProject(index)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 ${
                          index === activeProject
                            ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 border border-transparent'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border ${
                          index === activeProject
                            ? 'border-blue-300 dark:border-blue-700'
                            : 'border-slate-200 dark:border-slate-700'
                        }`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-slate-900 dark:text-white truncate">
                            {project.title}
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 truncate">
                            {project.type} • {project.year}
                          </div>
                        </div>
                        <ChevronRight className={`w-5 h-5 flex-shrink-0 ${
                          index === activeProject
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-slate-400'
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Scroll horizontally or use arrow keys to navigate between projects • Click on any project to view details
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Building impactful solutions that transform industries
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:nazeehnahaban09@gmail.com"
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <Mail className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                <p className="text-slate-600 dark:text-slate-400">nazeehnahaban09@gmail.com</p>
              </a>

              <a
                href="https://wa.me/919207904611"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📱</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">WhatsApp</h3>
                <p className="text-slate-600 dark:text-slate-400">+91 9207904611</p>
              </a>

              <a
                href="tel:+971507889313"
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <Phone className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-slate-400">+971 50 788 9313</p>
              </a>

              <a
                href="https://www.linkedin.com/in/nazeeh-nahaban"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <Linkedin className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-400">Connect with me</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Nazeeh Nahaban. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Based in Dubai • Available Worldwide
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              UAE: +971 50 788 9313 • India: +91 92079 04611
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;