import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Menu, X, Briefcase, GraduationCap, ExternalLink, MapPin, Phone, Moon, Sun } from 'lucide-react';
import * as THREE from 'three';
import Fly from './assets/Fly.png'
import waves from "./assets/waves.png"
import fos from "./assets/fos.png"
import pit from "./assets/pit.png"
import besp from "./assets/besp.png"
const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 10;
    camera.rotation.x = -0.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const gridHelper = new THREE.GridHelper(200, 50, 0x7DF9FF, 0x232323);
    scene.add(gridHelper);

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: 0x7DF9FF,
      emissive: 0x7DF9FF,
      emissiveIntensity: 0.5,
      metalness: 0.6,
      roughness: 0.4,
    });

    const boxes = [];
    for (let i = 0; i < 150; i++) {
      const box = new THREE.Mesh(boxGeometry, boxMaterial);
      const x = THREE.MathUtils.randFloatSpread(150);
      const z = THREE.MathUtils.randFloatSpread(150);
      const y = THREE.MathUtils.randFloat(1, 20);
      
      box.position.set(x, y / 2, z);
      box.scale.set(THREE.MathUtils.randFloat(1, 4), y, THREE.MathUtils.randFloat(1, 4));
      box.userData.rotationSpeed = THREE.MathUtils.randFloat(0.001, 0.003);
      scene.add(box);
      boxes.push(box);
    }
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x7DF9FF, 200, 100);
    pointLight.position.set(0, 20, 0);
    scene.add(pointLight);

    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
      camera.lookAt(0, 0, 0);
      gridHelper.position.z += 0.05;
      if(gridHelper.position.z > 4) gridHelper.position.z = 0;
      
      boxes.forEach(box => {
        box.rotation.y += box.userData.rotationSpeed;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 opacity-40" />;
};

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
};

const projects = [
  {
    title: 'Pitchify',
    description: 'Architected and developed a entrepreneurship and investment platform using Docker and Kubernetes with real-time communication.',
    tech: ['TypeScript', 'React.js', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'AWS', 'Stripe', 'Docker', 'Kubernetes'],
    link: 'https://github.com/nazeeh4611/PITCHIFY',
    image: pit
  },
  {
    title: 'BESPOKE',
    description: 'Developed a comprehensive e-commerce application with secure Razorpay integration and deployed using Docker and Kubernetes.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'Kubernetes', 'Razorpay', 'Passport.js', 'Google OAuth2'],
    link: 'https://bespoke-gwop.onrender.com',
    image: besp
  },
  {
    title: 'Wavescation',
    description: 'Built a Dubai-based staycation booking platform with advanced search filtering and real-time availability management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Tailwind CSS', 'Payment Gateway'],
    link: 'https://wavescation.com',
    image: waves
  },
  {
    title: 'Foscape',
    description: 'Created a dual-purpose platform for aquarium setup booking and e-commerce with comprehensive product catalog.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Cloudinary', 'Tailwind CSS'],
    link: 'https://foscape.com',
    image: fos
  },
  {
    title: 'FLYBUYBRAND',
    description: 'Architected a multi-vendor e-commerce platform with WhatsApp API integration and role-based access control.',
    tech: ['React.js', 'Node.js', 'WhatsApp API', 'MongoDB Atlas', 'AWS EC2', 'AWS S3'],
    link: 'https://flybuybrand.com',
    image: Fly
  }
];

const skillCategories = [
  { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Java', 'C', 'C++'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'Socket.io', 'gRPC', 'JWT', 'Cron Jobs', 'Morgan'] },
  { title: 'Frontend', skills: ['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'EJS', 'jQuery'] },
  { title: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
  { title: 'DevOps & Cloud', skills: ['Docker', 'Kubernetes', 'AWS (EC2, S3, CloudFront)', 'Jenkins', 'CI/CD', 'Nginx', 'PM2', 'Git'] },
  { title: 'Tools & APIs', skills: ['Stripe', 'Razorpay', 'Google Auth', 'Passport.js', 'WhatsApp API', 'Postman', 'Figma', 'Cloudinary', 'Multer'] }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);
      
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold text-cyan-400 hover:scale-110 transition-transform">
              NN
            </button>
            <nav className="hidden md:flex items-center gap-1">
              {['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                    activeSection === item ? 'text-cyan-400 bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-800">
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800 pb-4 animate-in slide-in-from-top">
            <nav className="flex flex-col items-center gap-2 px-4 pt-4">
              {['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`w-full px-4 py-2 rounded-lg text-base font-medium transition-all hover:scale-105 ${
                    activeSection === item ? 'text-cyan-400 bg-gray-800' : 'text-gray-400'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ThreeScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950"></div>
        <div className="relative z-10 text-center px-4">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/20 animate-pulse">
            <span className="text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-600 bg-clip-text text-transparent">NN</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-in fade-in slide-in-from-bottom duration-1000">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">Nazeeh Nahaban</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            A Full-Stack Developer specializing in MERN Stack. I enjoy building scalable Web Applications with exceptional user experiences.
          </p>
          <div className="flex justify-center gap-4 mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a href="https://github.com/nazeeh4611" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-all">
              <Github className="w-6 h-6 text-cyan-400" />
            </a>
            <a href="https://linkedin.com/in/nazeeh-nahaban" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6 text-cyan-400" />
            </a>
            <a href="mailto:nazeehnahaban09@gmail.com" className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-all">
              <Mail className="w-6 h-6 text-cyan-400" />
            </a>
          </div>
          <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-purple-500/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            Contact Me →
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <section id="about" className="py-24">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-6 text-lg text-gray-400 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <p className="border-l-4 border-cyan-400 pl-4 hover:border-purple-500 transition-colors">I'm Nazeeh Nahaban, a self-taught Full Stack Developer passionate about building scalable and efficient solutions. My journey into tech has been driven by curiosity and hands-on learning, focusing on the MERN stack and modern web technologies.</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="border-l-4 border-cyan-400 pl-4 hover:border-purple-500 transition-colors">I've gained practical experience with JavaScript, TypeScript, Node.js, Express.js, React.js, MongoDB, PostgreSQL, Redis, Docker, Kubernetes, and RESTful APIs. Comfortable working across both frontend and backend, I enjoy creating clean, efficient code and reliable, maintainable systems.</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="border-l-4 border-cyan-400 pl-4 hover:border-purple-500 transition-colors">Currently, I work as a freelance Full Stack Developer at Nacrosoft Technologies, where I develop enterprise-level web applications, collaborate with cross-functional teams, and implement modern development practices including CI/CD pipelines and cloud deployment.</p>
            </ScrollReveal>
          </div>
        </section>

        <section id="projects" className="py-24">
  <ScrollReveal>
    <h2 className="text-4xl font-bold text-center mb-12">
      My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
    </h2>
  </ScrollReveal>
  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <ScrollReveal key={project.title} delay={index * 100}>
        <div className="group rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-cyan-400/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
          <div className="relative h-48 overflow-hidden bg-gray-800">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 7).map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all cursor-default">{tech}</span>
              ))}
              {project.tech.length > 7 && <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">...</span>}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:gap-3 transition-all">
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    ))}
  </div>
</section>

        <section id="skills" className="py-24">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 100}>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-cyan-400/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="experience" className="py-24">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Experience</span>
            </h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gray-800 rounded-full group-hover:bg-cyan-400/20 transition-all">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold">Full Stack Developer (Freelance)</h3>
                        <p className="text-gray-400">Nacrosoft Technologies Pvt Ltd, Kerala</p>
                      </div>
                      <span className="text-sm text-gray-400">Oct 2023 - Present</span>
                    </div>
                    <p className="text-gray-400">Contributing to full-stack web application development—designing scalable architectures, building features, integrating APIs, and implementing CI/CD pipelines. This role has deepened my frontend and backend skills and strengthened my understanding of enterprise software development and team collaboration.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="education" className="py-24">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Training</span>
            </h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal delay={100}>
              <div className="flex gap-6 hover:translate-x-2 transition-transform">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-cyan-400 rounded-full">
                    <GraduationCap className="w-4 h-4 text-gray-950" />
                  </div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">MERN Stack Development</h3>
                    <span className="text-sm text-gray-400">Oct 2023 - Present</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-2">Brototype, Kerala</p>
                  <p className="text-gray-400 text-sm">Completed intensive full-stack program, built multiple full-scale projects, mentored junior developers, and gained hands-on experience with modern web technologies and best practices.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex gap-6 hover:translate-x-2 transition-transform">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-cyan-400 rounded-full">
                    <GraduationCap className="w-4 h-4 text-gray-950" />
                  </div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                    <span className="text-sm text-gray-400">Oct 2025 - Present</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-2">Amity University</p>
                  <p className="text-gray-400 text-sm">Pursuing computer science fundamentals, strengthening analytical and problem-solving skills.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex gap-6 hover:translate-x-2 transition-transform">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-cyan-400 rounded-full">
                    <GraduationCap className="w-4 h-4 text-gray-950" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Higher Secondary Education (Computer Science)</h3>
                    <span className="text-sm text-gray-400">May 2023</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-2">SNMHSS, Parappanangadi</p>
                  <p className="text-gray-400 text-sm">Completed foundational coursework in computer science, building a strong base for software development.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="contact" className="py-24">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connect</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                <a href="mailto:nazeehnahaban09@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                  <Mail className="w-5 h-5" />
                  <span>nazeehnahaban09@gmail.com</span>
                </a>
                <a href="tel:9207904611" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                  <Phone className="w-5 h-5" />
                  <span>920 790 4611</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Calicut, Kerala</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/nazeeh4611" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg border border-gray-800 hover:border-cyan-400 transition-all hover:scale-110">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/nazeeh-nahaban" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg border border-gray-800 hover:border-cyan-400 transition-all hover:scale-110">
                  LinkedIn
                </a>
                <a href="mailto:nazeehnahaban09@gmail.com" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all hover:scale-110 shadow-lg shadow-purple-500/50">
                  Email Me
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center text-gray-400">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/nazeeh4611" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 transition-all hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/nazeeh-nahaban" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm">&copy; 2025 Nazeeh Nahaban. All rights reserved.</p>
          <p className="text-xs mt-2">Built with React, Tailwind CSS, and Three.js</p>
        </div>
      </footer>
    </div>
  );
}