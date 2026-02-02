import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Menu, X, ArrowRight, Download, Phone, Calendar, MapPin, Users, Code, Zap } from 'lucide-react';

import y from "./assets/y.png"
import v from "./assets/v.png"
import s from "./assets/s.png"
import b from "./assets/b.png"
import f from "./assets/f.png"
import p from "./assets/p.png"
import d from "./assets/d.png"
import a from "./assets/a.png"
import Nazeeh_Nahaban from "./assets/Nazeeh_Nahaban.pdf"

const FloatingIcons = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  
  useEffect(() => {
    const icons = iconsRef.current;
    const container = containerRef.current;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    
    icons.forEach((icon, index) => {
      if (!icon) return;
      
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;
      let x = Math.random() * (bounds.width - 60);
      let y = Math.random() * (bounds.height - 60);

      const animate = () => {
        x += speedX;
        y += speedY;

        if (x <= 0 || x >= bounds.width - 60) x = Math.max(0, Math.min(x, bounds.width - 60));
        if (y <= 0 || y >= bounds.height - 60) y = Math.max(0, Math.min(y, bounds.height - 60));

        if (icon) {
          icon.style.transform = `translate(${x}px, ${y}px)`;
        }

        requestAnimationFrame(animate);
      };

      animate();
    });
  }, []);

  const techIcons = [
    {
      name: 'React',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />,
    },
    {
      name: 'Next.js',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8 dark:invert" />,
    },
    {
      name: 'Node.js',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />,
    },
    {
      name: 'TypeScript',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" />,
    },
    {
      name: 'MongoDB',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />,
    },
    {
      name: 'Docker',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8" />,
    },
    {
      name: 'AWS',
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-8 h-8 brightness-0 dark:invert" />,
    },
    {
      name: 'Tailwind',
      icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAAAY1BMVEX///84vfgjufgvu/geuPjp9/73/P/t+f7i9P76/v+r4PzU7/3z+/+l3vvM7P265fxlyfmR1/tCwPiB0vpZxvlzzfrI6/3a8v6d2/u+5/w8v/iy4vxgyPlSxPmn3/t90fqL1frNJVehAAAI+0lEQVR4nO2daZuyOgyGhwaRRQQKFQQZ+P+/8rDpuODIkrSnzHt/9BoZ+tglTZP060s5u/TsRpUIk5Jzo4WXoYgjPzjae9XvphTLPmeCG8AYNBj3tB+w5vP8EgW2pfpFFeCkbmi0whi/08qUh9nxT2lknSv+WZoHkSAs/spgO4um30zW5qYRM8PCUf3u5KT1EnGuErHqqLoBpATlYnGuEuX+QXUrqHA5WyXOIBHUm5yJAhR1eoWizS1nXomlTqcQ81U3CBUrxlSnheVn1Y3C42ysm5XHFbrYqtuFg1Nhd54eYK7qpmFgc4LO08PCnerWrSag6Tw9ALrPQpFJKE8Di1W3cBWCsvd0QKnxGAvJ5WkEMrTdk4VkM/MDuq5j9IPrKpCWk5A0eRqBhOrGzieSJ08zCSW6eT1c4oX9WSCul9PjKLP3dALlOvWgnZyV60EgQyNDKJGvTyOQNhv6WvboGkhVN3waR7lz8w+ghUCWgsE1wJCHGMmBW6VOHwNwBaLYuUhf2ukEKiiOAUqV8jTgCeSZBCtiprT7NACWHbQ3cqQn3T/0nTx9RA/rgn20EMjhFH6BeKTxrTClqP3gfDoFRVYLzpZHKUgTqAR2wnjOA7uX7gMmj4OXcZwW1dpYhV/0yREECsHI8Y+xn9Z2YHn01mazfSqJIF89sQpmAL5XyX7oPsCSDz3UE1QKrbSkW+ceC9Y9Y4T72QfMxPv8DbuiUYit8tp3vk9AH173sw8rJ76hTXPKYRaLm+F07gfAX73qW1cAY0bnDHKKLsSyha3Y9yfi63rgGNbPu1WzvHkHEl/+QvPFG34tfOOwGFq54FjcJREoWeCUvjViafd7z7DzWuQrTymsaoDZFl519V0xdIe/1yvPqkXfPpD4ZGeOseNtJiQwfvrFffG0+EUSRwX59Gl2fzcNsgm2yUx6eVYYVTRHikxMGylWdjfEIVnejDec2tat29L5JAIBZJ8tPcc37v85wdZUwPrHkixj7Uan/n2/YddPVny5rh0jOAjy0IXjAeP+O4l2RfK8x2H4cXvN8MJ46pnM/QgsF763fziScPanLHn1RRHMPl8VsOU7njtOhP7Z1oXJE1FnflG4flYlfDxFz8QPSXM4i3CeRClQL1Ln6oWXpM6fv7jgtOSe1EQzqKgF+gjJsQXijK9YIEAaCA8kmNEldJP0FHKCU+U9rj1FGnX/AYK1Hf8gX51AsGx7LRt1AmmSm6hoDiLYeBGhZBXDMuJkoKAHUWws6FAgkE5BwjePrTSww/PIsSkye99iajM339jRZa++yoPif5CMJSPHrkPXNLJYTjS1qW1JBiKn9JM8Og6ugSN1xKJOZvMY+wttFwLAPw2UC2nUMJR6JdeNkZLECHWYeng0PoFeI6cHCMIM1YBbY2mAhfqPrRsu9kIGhsbL+gj7GDPaFVisibNwOrYwkRQCFmqRbjiXHUrENDCxSXVa9hlfKRGDWDdXzzy8ClbUKS1dvfyESzgEC+vc8myzA+sJ6xwb5nSN2qiN8s+IM5C6Vck+FtruAlou9XlDtuAMLK+oQ26w56AeuJZp52EUpKqKRzsNVoujtHy1c9gdAzeLRZKUJedlmSRtmf+sONkHFS928E5uVIVJmbf5pWYD5LxMRNy+kYL3+R+RBvXl2ptfR3rbo01e+ce/ONgtr433nFBcv7t4IA40qsmznn0gjDn3DrQDj0fe9qvqtzhBuMhkhaYbaVvBcTJ2vdye74LXN23Qn5K1ToUtb5fPa3fLg0LJJofZGe/egY/lAvQDNzkdWLgt0zHCLm4ALN7Ocu9RnMkBbOW8iao2OhNbWOz3CV2m2vy09P8dR7rzbqNNS9d8FqIO7weu9c7VJ49pA5I0GUlIqf1tahTK/4ik8rtM6DkJSatOrGfclsTizYBcTlYG9FPzPQRlUmiRnXWl2TJmS6/drFX4nyMxHeQmkEYhbkJF6W99Qvtp6hN9RJfMmVRVTrUm15mquNVjEAi7B1HEpSoaXR0mrkAugT6vpa1lgtqDvBDxYVck3Yb3DvMbrSU7CptKeVUihiWQw00C5xsff+vbtQP0Fw9gDbGQEVRB+B7pPm1QYxL5wdFLU+8YfEdhPiX0Z7lAKIZixQhK7zoj4hgj4U0Hz18UdixPoIgZJn4oxNPa3t478N7zcKyAaLJan2Tduob52oe84OSP6iTn312fBxctauGR5dV/e1p5COqrPaSYs8sUp1WR01TbXVUVvztYIBhed4sX4xMPN52MZB5ac9drX0Eaf3j9FNqBOVbInqQ2BiQLNwdWv3+kKxw/P1u1IKkazxd57a8Z4AzdOLz5NeZbaHZJMsYW7A+uJ+KAv/caboWBfMnERnJ1hVnPfAvnlh2PX0nDGe4duCwb9yRhQsBn/Vbej98cf3bue+byhZWmjNqM4/l99fMTEfhqL6325opZ3yPZb0A+7WjMerQzaC5dWic7URk1Fn42VA/Zw/8mWNy/YX2v3NFEmzUbneLX/mDXTwYGww9tbKyq9fvmPVE4HjAm3mWNpv5L2gPB1qsZXhilyQ4khtAgUR4X3oPVZ3mugJGcEIYfUVQwnJqsFplAvUZglGFcR1kWxSGHcTcdxTlauGZDeA+pQL1KV979Ab7t0xiHaM5aS0FwwwMUsTIe4ox/UCsQwc6r2R1gBnCpFQh/496A2yVVCqRFkIM6gQD/SioKlAmkS21rRQLpEmMlww4ageC6STIUCASlTqkKjvRANN3i8CXHEulXvZnEa/8OfQKEf6jlpXGsPbNXQyGrB+kpj5Sq8TrL8/W1k7HO63stQ4Mgn4RMnbJ/XinIQvE69L93wKaoiX6FlVon0ffQpbOyWnXbUCCqVLGFIh4D6FWEGkyxodLxuxCraPwAGHql9X7kiDlPA6s31HkGziXSKAMmNPNmTOSEoRCY27yVoSON1+VuAINoAybPL1hFsuLegUuhkxt1IXZWzk+SaisBZ9vuOnfYbjijUDIAM0SxzTn5LY73LeBjTmJ374D4/iMlpF/YeW4d8mvy5j39Z0nsn/7MoHqPfTwXWR1XImwRVd3eOuDZW6gi+Y9//OM9/wEuQoe2zzDLwQAAAABJRU5ErkJggg==" alt="Tailwind" className="w-8 h-8" />,
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {techIcons.map((tech, index) => (
        <div
          key={index}
          ref={el => iconsRef.current[index] = el}
          className="absolute w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
          style={{ transition: 'transform 0.1s linear' }}
          title={tech.name}
        >
          <div className="flex items-center justify-center">
            {tech.icon}
          </div>
        </div>
      ))}
    </div>
  );
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]">
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-300 text-sm">{project.location}</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-medium text-white">{project.type}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-3 transition-all">
                <span className="group-hover:translate-x-1 transition-transform">Visit Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('all');

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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = Nazeeh_Nahaban;
    link.download = Nazeeh_Nahaban;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      title: 'Wavescation',
      description: 'Dubai-based staycation booking platform with AFS payment gateway integration and complete management system for both users and admins.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'AFS Payment', 'Docker', 'Google Cloud Run'],
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
      title: 'Simpolo Trading',
      description: 'Tiles and sanitary trading company platform with complete admin management, product listing, and inquiry setup for Dubai and Sharjah markets.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'AWS', 'Docker'],
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
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'AWS S3', 'Cloudinary'],
      link: 'https://www.thefoscape.com/',
      image: p,
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
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'AWS'],
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
      tech: ['Next.js', 'Node.js', 'MongoDB Atlas', 'WhatsApp API', 'Razorpay', 'AWS'],
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

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "FlyHomes Associates - Remote",
      period: "Dec 2024 - Jan 2026",
      description: "Led development of UAE-based platforms including staycation booking and B2B trading systems with secure payment integrations.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Full Stack Developer (Freelance)",
      company: "Multiple International Clients",
      period: "Jan 2024 - Dec 2024 ",
      description: "Developed scalable web applications for UAE, KSA, and Indian clients using MERN stack. Implemented payment gateways and cloud deployment solutions.",
      icon: <Code className="w-6 h-6" />
    },
    
    {
      title: "MERN Stack Developer",
      company: "Brototype - Calicut, Kerala",
      period: "May 2023 - Dec 2024 ",
      description: "Built e-commerce platforms and property management systems while exploring microservices architecture.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const services = [
    {
      title: "Website Development",
      description: "Custom-built websites tailored to your vision.",
      icon: "🛠️"
    },
    {
      title: "SEO Optimized",
      description: "Engineered for better visibility and higher rankings.",
      icon: "🔍"
    },
    {
      title: "Modern Design",
      description: "Clean, contemporary UI that reflects your brand.",
      icon: "🎨"
    },
    {
      title: "Responsive",
      description: "Perfect experience across devices and screen sizes.",
      icon: "📱"
    },
    {
      title: "API Integration",
      description: "Third-party services and APIs integration.",
      icon: "🔌"
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support to keep projects functional.",
      icon: "⚙️"
    }
  ];

  const stats = [];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden relative">
      <div
        className="fixed inset-0 opacity-20 dark:opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`
        }}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo/Brand - Left aligned */}
      <button onClick={() => scrollToSection('home')} className="text-2xl font-bold tracking-tighter">
        NN
      </button>
      
      {/* Navigation Links - Centered */}
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
        {['Home', 'Projects', 'About', 'Experience', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className={`text-sm font-medium transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 ${
              activeSection === item.toLowerCase()
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Action Buttons - Right aligned */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={downloadCV}
          className="px-6 py-2.5 rounded-full border border-purple-600 dark:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300 text-sm font-medium flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download CV
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 text-sm font-medium"
        >
          Book a Call
        </button>
      </div>

      {/* Mobile menu button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </div>

    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-6 flex flex-col gap-4 pb-4 animate-in slide-in-from-top">
        {['Home', 'Projects', 'About', 'Experience', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-left text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
          >
            {item}
          </button>
        ))}
        <button
          onClick={downloadCV}
          className="text-left text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download CV
        </button>
      </div>
    )}
  </div>
</nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="absolute top-24 right-8 md:right-24 flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium animate-pulse">
          <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
          <span className="uppercase tracking-wider">Based in Dubai • Available Worldwide</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Full Stack Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block animate-in slide-in-from-bottom duration-700">
              Hello, I'm
            </span>
            <span className="block animate-in slide-in-from-bottom duration-700 delay-200">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Nazeeh Nahaban
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-in fade-in duration-700 delay-400 max-w-3xl mx-auto">
            Self-taught Full-Stack Developer transforming ideas into production-ready web applications. 
            Expert in the complete MERN stack with hands-on experience in secure API design, 
            Docker containerization, and cloud deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in duration-700 delay-600">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={downloadCV}
              className="px-8 py-4 rounded-full border-2 border-purple-600 dark:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
          
          <div className="mt-16 flex justify-center gap-6 animate-in fade-in duration-700 delay-800">
            <a
              href="https://github.com/nazeeh4611"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nazeeh-nahaban"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nazeehnahaban09@gmail.com"
              className="w-14 h-14 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              title="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-20 animate-in fade-in duration-700 delay-1000">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 dark:text-gray-300">
              <a
                href="mailto:nazeehnahaban09@gmail.com"
                className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-lg">nazeehnahaban09@gmail.com</span>
              </a>
              <a
                href="https://wa.me/971507889313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">+971 50 788 9313</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              What I <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Provide</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">About Me</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Self-taught Full-Stack Developer transforming ideas into production-ready web applications. 
                    Expert in the complete MERN stack with hands-on experience in secure API design, Docker containerization, 
                    and cloud deployment.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Successfully delivered functional, scalable solutions for UAE and global clients by bridging 
                    technical knowledge with practical implementation skills.
                  </p>
                </div>
                <div className="relative h-64">
                  <FloatingIcons />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="projects" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              A collection of my recent work delivering impactful solutions across various industries
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('ecommerce')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'ecommerce'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                E-commerce
              </button>
              <button
                onClick={() => setActiveFilter('services')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'services'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveFilter('healthcare')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'healthcare'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Healthcare
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ProjectCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Work <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Building impactful solutions that transform industries
              </p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScrollReveal delay={200}>
              <a
                href="mailto:nazeehnahaban09@gmail.com"
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 block"
              >
                <Mail className="w-8 h-8 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">nazeehnahaban09@gmail.com</p>
              </a>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <a
                href="https://wa.me/971507889313"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 block"
              >
                <div className="w-8 h-8 mx-auto mb-4 text-purple-600 dark:text-purple-400 text-2xl">📱</div>
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">+971 50 788 9313</p>
              </a>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <a
                href="tel:+919207904611"
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 block"
              >
                <Phone className="w-8 h-8 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold mb-2">Phone (India)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">+91 92079 04611</p>
              </a>
            </ScrollReveal>
            
            <ScrollReveal delay={800}>
              <a
                href="https://linkedin.com/in/nazeeh-nahaban"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 block"
              >
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={1000}>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/nazeeh4611"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nazeeh-nahaban"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nazeehnahaban09@gmail.com"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Nazeeh Nahaban. All rights reserved.</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Based in Dubai • Available Worldwide</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+971507889313" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">
                UAE: +971 50 788 9313
              </a>
              <a href="tel:+919207904611" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">
                India: +91 92079 04611
              </a>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-4 text-center">Built with React and Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-in {
          animation: slideIn 0.7s ease-out forwards;
        }
        
        .slide-in-from-bottom {
          animation: slideInBottom 0.7s ease-out forwards;
        }
        
        .slide-in-from-top {
          animation: slideInTop 0.5s ease-out forwards;
        }
        
        .fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }
        
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;