HEADimport React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Mail, Phone, ArrowRight, Download, Calendar, MapPin, Users, Code, Zap, ExternalLink, ChevronRight, ChevronLeft, Menu, X, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const canvasRef = useRef(null);
  const threeLoaded = useRef(false);
  const rendererRef = useRef(null);

  const projects = [
    { title: 'Wavescation', description: 'Dubai-based staycation booking platform with AFS payment gateway integration and complete management system for both users and admins.', tech: ['React.js', 'Node.js', 'MongoDB', 'AFS Payment', 'Docker', 'Google Cloud Run'], link: 'https://www.wavescation.com/', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800', location: 'Dubai, UAE', type: 'Booking Platform', features: ['Real-time Availability', 'AFS Payment Gateway', 'Admin Dashboard', 'Booking Management'], year: '2024', role: 'Full Stack Developer', category: 'ecommerce', color: '#E8C170' },
    { title: 'Eventra', description: 'Dubai-based platform for booking events, parties, and hosting social gatherings with complete event management and ticketing.', tech: ['MERN Stack', 'Stripe', 'AWS S3', 'Redis', 'Docker'], link: 'https://www.eventra.club/', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800', location: 'Dubai, UAE', type: 'Event Booking', features: ['Event Booking', 'Party Hosting', 'Ticketing', 'Real-time Updates'], year: '2024', role: 'Full Stack Developer', category: 'platform', color: '#C470E8' },
    { title: 'Dubai Communities', description: 'Mobile application for connecting communities in Dubai, enabling users to host meetups, join existing communities, and participate in local events.', tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Socket.io'], link: '#', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800', location: 'Dubai, UAE', type: 'Community App', features: ['Community Creation', 'Meetup Hosting', 'Real-time Chat', 'Push Notifications'], year: '2024', role: 'Full Stack Developer', category: 'mobile', color: '#70E8C1' },
    { title: 'Simpolo Trading', description: 'Tiles and sanitary trading company platform with complete admin management, product listing, and inquiry setup for Dubai and Sharjah markets.', tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'AWS', 'Docker'], link: 'https://simpolotrading.com/', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800', location: 'Dubai & Sharjah, UAE', type: 'E-commerce', features: ['Product Management', 'Order Tracking', 'Admin Panel', 'Inventory'], year: '2024', role: 'Full Stack Developer', category: 'ecommerce', color: '#E87070' },
    { title: 'Foscape Aquatic', description: 'Complete e-commerce and service platform for aquatic solutions and landscaping company based in Kerala, India.', tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'AWS S3', 'Cloudinary'], link: 'https://www.thefoscape.com/', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800', location: 'Kerala, India', type: 'E-commerce & Services', features: ['Service Booking', 'E-commerce', 'Team Management', 'Product Catalog'], year: '2024', role: 'Full Stack Developer', category: 'services', color: '#70B8E8' },
    { title: 'DD Events UAE', description: 'Event management company platform based in Abu Dhabi, UAE with booking system and gallery management.', tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'AWS'], link: 'https://www.ddeventsuae.com/', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800', location: 'Abu Dhabi, UAE', type: 'Event Management', features: ['Event Booking', 'Gallery Management', 'Client Dashboard', 'Service Packages'], year: '2023', role: 'Full Stack Developer', category: 'services', color: '#E8A870' },
    { title: 'Arren Medical Clinic', description: 'Complete clinic management solution for a company in Saudi Arabia with patient management and appointment system.', tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind', 'AWS'], link: 'https://arren-ksa-frontend.vercel.app/', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800', location: 'Saudi Arabia', type: 'Clinic Management', features: ['Patient Management', 'Appointment System', 'Medical Records', 'Billing'], year: '2024', role: 'Full Stack Developer', category: 'healthcare', color: '#70E870' },
    { title: 'Pitchify', description: 'Platform connecting entrepreneurs and investors through video pitching with video call, chat, and Stripe payment gateway.', tech: ['MERN Stack', 'Socket.io', 'WebRTC', 'Redis', 'Docker', 'Stripe'], link: 'https://pitchify-frontend.vercel.app/', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800', location: 'Global', type: 'Startup Platform', features: ['Video Pitching', 'Real-time Chat', 'Stripe Payments', 'Investor Network'], year: '2024', role: 'Full Stack Developer', category: 'platform', color: '#E8E870' },
    { title: 'Flybuybrand', description: 'Multi-vendor e-commerce platform for clothing, accessories, and home appliances based in Kerala and Dubai.', tech: ['React.js', 'Node.js', 'MongoDB Atlas', 'WhatsApp API', 'Razorpay', 'AWS'], link: 'https://flybuybrand.com/', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800', location: 'Kerala & Dubai', type: 'Multi-vendor E-commerce', features: ['Multi-vendor', 'WhatsApp Integration', 'Seller Dashboard', 'Affiliate System'], year: '2024', role: 'Full Stack Developer', category: 'ecommerce', color: '#E870AA' },
    { title: 'Bespoke Shopping', description: 'Complete e-commerce platform with server-side rendering and elegant UI for clothing and fashion products.', tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'Docker', 'Kubernetes'], link: 'https://bespoke-gwop.onrender.com', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800', location: 'Global', type: 'E-commerce', features: ['Social Login', 'Wishlist', 'Order Management', 'Admin Panel'], year: '2023', role: 'Full Stack Developer', category: 'ecommerce', color: '#AA70E8' },
    { title: 'Ayurcare Wellness', description: 'Services listing website with modern UI for wellness center in Kerala, showcasing treatments and bookings.', tech: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'], link: 'https://ayurcare-wellness.vercel.app/', image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=800', location: 'Kerala, India', type: 'Wellness Platform', features: ['Service Listings', 'Booking System', 'Responsive Design', 'Contact Management'], year: '2024', role: 'Frontend Developer', category: 'healthcare', color: '#70E8A8' },
    { title: 'SecondWave', description: 'Kerala-based digital marketing agency website showcasing SEO, social media, and content marketing services with modern design and animations.', tech: ['React.js', 'Tailwind CSS', 'GSAP', 'EmailJS', 'Vercel'], link: 'https://secondwave.in/', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800', location: 'Kochi, Kerala', type: 'Digital Marketing Agency', features: ['Service Showcase', 'Portfolio Gallery', 'Contact System', 'SEO Optimization'], year: '2024', role: 'Full Stack Developer', category: 'marketing', color: '#E87890' },
    { title: 'MediaMind', description: 'Dubai-based digital marketing agency platform offering brand strategy, performance marketing, social media management, and creative content solutions for regional businesses.', tech: ['React.js', 'Tailwind CSS', 'GSAP', 'Three.js', 'Vercel'], link: 'https://mediamind-mauve.vercel.app/', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800', location: 'Dubai, UAE', type: 'Digital Marketing Agency', features: ['Brand Strategy', 'Performance Marketing', 'Social Media', 'Creative Content'], year: '2025', role: 'Full Stack Developer', category: 'marketing', color: '#60C8FF', altLink: 'http://mediamind.ae/', altLabel: 'mediamind.ae' },
    { title: 'Alrkn Alraqy', description: 'Hotel management and booking platform serving Middle East, Africa, and Europe markets with multilingual support and complete reservation system.', tech: ['MERN Stack', 'Stripe', 'AWS', 'Redis', 'i18n', 'Docker'], link: 'https://alrknalraqy.in', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800', location: 'Middle East, Africa & Europe', type: 'Hotel Booking', features: ['Multi-language', 'Hotel Reservations', 'Admin Dashboard', 'Payment Integration', 'Reviews'], year: '2024', role: 'Full Stack Developer', category: 'platform', color: '#C8A050' },
    { title: 'FlyHomies', description: 'Dubai-based software development company website showcasing services, portfolio, and team with modern animations.', tech: ['React.js', 'Three.js', 'GSAP', 'Tailwind CSS', 'Vercel'], link: 'https://www.flyhomies.com/', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800', location: 'Dubai, UAE', type: 'Company Website', features: ['Service Portfolio', 'Team Showcase', 'Contact System', '3D Animations'], year: '2024', role: 'Full Stack Developer', category: 'services', color: '#70A0E8' }
  ];

  const experiences = [
    { title: 'Full Stack Developer', company: 'FlyHomes Associates', location: 'Remote', period: 'Dec 2024 – Jan 2026', description: 'Led development of UAE-based platforms including staycation booking and B2B trading systems with secure payment integrations.', color: '#E8C170' },
    { title: 'Full Stack Developer', company: 'Multiple International Clients', location: 'Freelance', period: 'Jan 2024 – Dec 2024', description: 'Developed scalable web applications for UAE, KSA, and Indian clients using MERN stack. Implemented payment gateways and cloud deployment solutions.', color: '#C470E8' },
    { title: 'MERN Stack Developer', company: 'Brototype', location: 'Calicut, Kerala', period: 'May 2023 – Dec 2024', description: 'Built e-commerce platforms and property management systems while exploring microservices architecture and modern DevOps practices.', color: '#70E8C1' }
  ];

  const skills = [
    { name: 'React.js', level: 95, icon: '⚛' }, { name: 'Node.js', level: 92, icon: '🟢' },
    { name: 'MongoDB', level: 90, icon: '🍃' }, { name: 'Docker', level: 85, icon: '🐳' },
    { name: 'TypeScript', level: 82, icon: '📘' }, { name: 'AWS', level: 80, icon: '☁' },
    { name: 'Socket.io', level: 88, icon: '⚡' }, { name: 'React Native', level: 75, icon: '📱' },
    { name: 'Redis', level: 78, icon: '🔴' }, { name: 'Three.js', level: 65, icon: '🔮' },
    { name: 'PostgreSQL', level: 72, icon: '🐘' }, { name: 'GraphQL', level: 70, icon: '◈' }
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);
  const safeIdx = Math.min(activeProject, filteredProjects.length - 1);
  const cur = filteredProjects[safeIdx] || projects[0];

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 18 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
        setTimeout(() => setLoadingDone(true), 500);
      }
      setLoadProgress(Math.min(p, 100));
    }, 100);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      const secs = ['home', 'projects', 'about', 'skills', 'experience', 'contact'];
      for (const s of secs) {
        const el = document.getElementById(s);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 150 && r.bottom >= 150) { setActiveSection(s); break; }
        }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (!loadingDone || threeLoaded.current) return;
    threeLoaded.current = true;

    const initThree = () => {
      const canvas = canvasRef.current;
      if (!canvas || !window.THREE) return;

      const T = window.THREE;

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      let renderer;
      try {
        renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'default' });
      } catch (e) {
        return;
      }

      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;

      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
      camera.position.z = 35;

      const N = 800;
      const geo = new T.BufferGeometry();
      const pos = new Float32Array(N * 3);

      for (let i = 0; i < N; i++) {
        const r = 25 + Math.random() * 15;
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
        pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.25;
        pos[i * 3 + 2] = r * Math.cos(ph);
      }

      geo.setAttribute('position', new T.BufferAttribute(pos, 3));

      const pts = new T.Points(
        geo,
        new T.PointsMaterial({ color: 0xc8a050, size: 0.15, transparent: true, opacity: 0.25 })
      );
      scene.add(pts);

      let mx = 0, my = 0, animId;
      const onM = (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onM);

      const onR = () => {
        if (!canvas || !renderer) return;
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onR);

      let t = 0;
      const loop = () => {
        animId = requestAnimationFrame(loop);
        t += 0.001;
        pts.rotation.y = t * 0.08 + mx * 0.03;
        pts.rotation.x = my * 0.02;
        try { renderer.render(scene, camera); } catch (e) { cancelAnimationFrame(animId); }
      };
      loop();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', onM);
        window.removeEventListener('resize', onR);
        geo.dispose();
        renderer.dispose();
      };
    };

    if (window.THREE) {
      initThree();
    } else {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      s.onload = initThree;
      document.head.appendChild(s);
    }
  }, [loadingDone]);

  useEffect(() => {
    if (!loadingDone) return;

    const loadGSAP = async () => {
      const loadScript = (src) => new Promise((res) => {
        if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
        const s = document.createElement('script');
        s.src = src;
        s.onload = res;
        s.onerror = res;
        document.head.appendChild(s);
      });

      if (!window.gsap) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
      }

      requestAnimationFrame(() => {
        setTimeout(() => runAnims(), 100);
      });
    };

    loadGSAP();
  }, [loadingDone]);

  const runAnims = () => {
    const gsap = window.gsap;
    const ST = window.ScrollTrigger;
    if (!gsap) return;
    if (ST) gsap.registerPlugin(ST);

    const heroChars = document.querySelectorAll('.hc');
    if (heroChars.length > 0) {
      gsap.fromTo(heroChars,
        { yPercent: 120, opacity: 0, rotationX: -90, transformOrigin: 'center bottom' },
        { yPercent: 0, opacity: 1, rotationX: 0, duration: 1, ease: 'expo.out', stagger: 0.035, delay: 0.2 }
      );
    }

    const heroSubs = document.querySelectorAll('.hsub');
    if (heroSubs.length > 0) {
      gsap.fromTo(heroSubs,
        { y: 50, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 1.0 }
      );
    }

    const heroCtas = document.querySelectorAll('.hcta');
    if (heroCtas.length > 0) {
      gsap.fromTo(heroCtas,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.8)', stagger: 0.1, delay: 1.7 }
      );
    }

    const badge = document.querySelector('.hbadge');
    if (badge) {
      gsap.fromTo(badge, { y: -28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 });
    }

    const mq1 = document.querySelector('.mq1');
    const mq2 = document.querySelector('.mq2');
    if (mq1) gsap.to(mq1, { x: '-50%', duration: 22, ease: 'none', repeat: -1 });
    if (mq2) gsap.to(mq2, { x: '50%', duration: 28, ease: 'none', repeat: -1 });

    if (!ST) return;

    const orb1 = document.querySelector('.orb1');
    const orb2 = document.querySelector('.orb2');
    if (orb1) gsap.to(orb1, { y: -100, ease: 'none', scrollTrigger: { trigger: '#home', scrub: 2 } });
    if (orb2) gsap.to(orb2, { y: 80, ease: 'none', scrollTrigger: { trigger: '#home', scrub: 1.5 } });

    document.querySelectorAll('.lbl').forEach(el => {
      gsap.fromTo(el,
        { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
      );
    });

    document.querySelectorAll('.clip-wipe').forEach(el => {
      gsap.fromTo(el,
        { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 82%', once: true } }
      );
    });

    document.querySelectorAll('.cc').forEach((el, i) => {
      gsap.fromTo(el,
        { y: 70, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true }, delay: (i % 4) * 0.08 }
      );
    });

    document.querySelectorAll('.sbar').forEach(el => {
      const w = el.getAttribute('data-w');
      gsap.fromTo(el,
        { width: '0%' },
        { width: w + '%', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }
      );
    });

    const tline = document.querySelector('.tline');
    if (tline) {
      gsap.fromTo(tline,
        { scaleY: 0 },
        { scaleY: 1, duration: 2.5, ease: 'power2.out', transformOrigin: 'top center', scrollTrigger: { trigger: tline, start: 'top 75%', once: true } }
      );
    }

    const abl = document.querySelector('.abl');
    const abr = document.querySelector('.abr');
    if (abl) {
      gsap.fromTo(abl,
        { x: -80, opacity: 0, filter: 'blur(6px)' },
        { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: abl, start: 'top 80%', once: true } }
      );
    }
    if (abr) {
      gsap.fromTo(abr,
        { x: 80, opacity: 0, filter: 'blur(6px)' },
        { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: abr, start: 'top 80%', once: true } }
      );
    }

    document.querySelectorAll('.ccard').forEach((el, i) => {
      gsap.fromTo(el,
        { y: 80, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)', scrollTrigger: { trigger: el, start: 'top 88%', once: true }, delay: i * 0.1 }
      );
    });

    document.querySelectorAll('.svc-card').forEach((el, i) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true }, delay: i * 0.07 }
      );
    });

    document.querySelectorAll('.stat-num').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
      );
    });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const nextProj = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (window.gsap) {
      window.gsap.fromTo('.pca', { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
    }
    setActiveProject(p => (p + 1) % filteredProjects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProj = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (window.gsap) {
      window.gsap.fromTo('.pca', { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
    }
    setActiveProject(p => (p - 1 + filteredProjects.length) % filteredProjects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    setActiveProject(0);
    if (window.gsap) {
      window.gsap.fromTo('.pca', { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
    }
  }, [activeFilter]);

  const nameChars = 'Nazeeh Nahaban'.split('').map((ch, i) => (
    <span key={i} className="hc" style={{ display: 'inline-block', whiteSpace: ch === ' ' ? 'pre' : 'normal' }}>{ch}</span>
  ));

  const gold = '#c8a050';
  const bg = '#070503';
  const fg = '#e8ddd0';
  const fgA = (a) => `rgba(232,221,208,${a})`;
  const goldA = (a) => `rgba(200,160,80,${a})`;
  const border = 'rgba(255,255,255,0.06)';
  const borderGold = 'rgba(200,160,80,0.18)';
  const panel = 'rgba(255,255,255,0.02)';
  const serif = '"Cormorant Garamond", Georgia, serif';
  const display = '"Bebas Neue", sans-serif';
  const mono = '"DM Mono", monospace';

  if (!loadingDone) {
    return (
      <div style={{ background: bg, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&family=Bebas+Neue&family=DM+Mono:wght@300;400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
          body { margin: 0; }
        `}</style>
        <div style={{ width: 72, height: 72, borderRadius: '50%', border: `1px solid ${goldA(0.35)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 40, boxShadow: `0 0 40px ${goldA(0.12)}` }}>
          <span style={{ fontFamily: display, fontSize: 24, letterSpacing: 3, color: gold }}>NN</span>
        </div>
        <div style={{ width: 180, height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 12 }}>
          <div style={{ height: '100%', background: `linear-gradient(90deg, ${gold}, #e8d090)`, width: `${loadProgress}%`, transition: 'width 0.12s ease' }} />
        </div>
        <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: 4, color: fgA(0.2), textTransform: 'uppercase' }}>
          {loadProgress < 100 ? `Loading ${Math.round(loadProgress)}%` : 'Welcome'}
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: bg, color: fg, fontFamily: '"DM Sans", system-ui, sans-serif', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Bebas+Neue&family=DM+Mono:wght@300;400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #070503; }
        ::-webkit-scrollbar-thumb { background: #c8a050; border-radius: 2px; }
        ::selection { background: rgba(200,160,80,0.25); color: #fff; }
        .nav-a { font-family: "DM Mono", monospace; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(232,221,208,0.35); cursor: pointer; transition: color .3s; position: relative; padding: 4px 0; }
        .nav-a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #c8a050; transition: width .4s cubic-bezier(.4,0,.2,1); }
        .nav-a:hover, .nav-a.on { color: #c8a050; }
        .nav-a:hover::after, .nav-a.on::after { width: 100%; }
        .gbtn { background: linear-gradient(135deg, #b8902a, #e8c870); color: #070503; font-family: "DM Mono", monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 400; border: none; cursor: pointer; transition: all .35s cubic-bezier(.4,0,.2,1); display: inline-flex; align-items: center; gap: 8px; }
        .gbtn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(200,160,80,0.45); }
        .obtn { background: transparent; font-family: "DM Mono", monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all .35s; border: 1px solid rgba(200,160,80,0.3); color: #c8a050; display: inline-flex; align-items: center; gap: 7px; }
        .obtn:hover { border-color: #c8a050; background: rgba(200,160,80,0.07); transform: translateY(-2px); }
        .fpill { background: transparent; border: 1px solid rgba(255,255,255,0.07); color: rgba(232,221,208,0.35); font-family: "DM Mono", monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; padding: 7px 14px; border-radius: 100px; transition: all .3s; white-space: nowrap; }
        .fpill:hover { border-color: rgba(200,160,80,0.4); color: #c8a050; }
        .fpill.on { background: rgba(200,160,80,0.1); border-color: #c8a050; color: #c8a050; }
        .pi { overflow: hidden; position: relative; }
        .pi img { transition: transform .7s cubic-bezier(.4,0,.2,1); display: block; width: 100%; height: 100%; object-fit: cover; }
        .pi:hover img { transform: scale(1.05); }
        .ecard { border: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.015); transition: all .4s cubic-bezier(.4,0,.2,1); border-radius: 2px; }
        .ecard:hover { border-color: rgba(200,160,80,0.2); background: rgba(200,160,80,0.03); transform: translateX(6px); }
        .stag { display: inline-block; padding: 4px 11px; border-radius: 100px; font-family: "DM Mono", monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; }
        .svc-card { border: 1px solid rgba(255,255,255,0.05); background: transparent; position: relative; transition: all .4s; cursor: default; }
        .svc-card:hover { border-color: rgba(200,160,80,0.2); background: rgba(200,160,80,0.025); transform: translateY(-4px); }
        .proj-list-btn { display: flex; align-items: center; gap: 10px; padding: 9px 10px; border: none; cursor: pointer; transition: all .3s; border-radius: 2px; background: transparent; text-align: left; width: 100%; }
        .proj-list-btn:hover { background: rgba(200,160,80,0.04); }
        .proj-list-btn.active-proj { background: rgba(200,160,80,0.07); outline: 1px solid rgba(200,160,80,0.2); }
        @keyframes pulse-dot { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); } 50% { box-shadow: 0 0 0 8px rgba(74,222,128,0); } }
        @keyframes float-orb { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes spin-ring { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-ring-rev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        .ring-spin { animation: spin-ring 18s linear infinite; }
        .ring-spin-rev { animation: spin-ring-rev 24s linear infinite; }
        
        @media (max-width: 1024px) {
          .proj-layout { grid-template-columns: 1fr !important; }
          .proj-sidebar { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 14px !important; }
          .proj-list-panel { display: none !important; }
        }
        @media (max-width: 768px) {
          .hd-nav, .hd-btns { display: none !important; }
          .hd-mb { display: flex !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .hero-stats { flex-direction: row !important; gap: 24px !important; align-items: flex-start !important; }
          .stat-row { flex-direction: column !important; gap: 6px !important; align-items: flex-start !important; }
          .stat-num { font-size: 40px !important; }
          .footer-row { flex-direction: column !important; gap: 20px !important; text-align: center !important; align-items: center !important; }
          .proj-sidebar { grid-template-columns: 1fr !important; }
          .filter-row { overflow-x: auto; -webkit-overflow-scrolling: touch; flex-wrap: nowrap !important; padding-bottom: 8px; }
          .filter-row::-webkit-scrollbar { height: 2px; }
          .filter-row::-webkit-scrollbar-thumb { background: rgba(200,160,80,0.3); }
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
          .about-orb-wrap { width: 260px !important; height: 260px !important; }
          .about-float-1 { left: -30px !important; top: -30px !important; }
          .about-float-2 { left: 200px !important; top: -10px !important; }
          .about-float-3 { left: 195px !important; top: 210px !important; }
          .proj-img { height: 220px !important; }
          .proj-details-pad { padding: 20px !important; }
          .hero-pad { padding: 90px 20px 60px !important; }
          .section-pad { padding: 80px 20px !important; }
          .header-pad { padding: 0 20px !important; }
          .mq-text { font-size: 11px !important; }
          .hero-name-h1 { font-size: clamp(44px, 13vw, 80px) !important; }
        }
        @media (max-width: 480px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .about-orb-wrap { width: 220px !important; height: 220px !important; }
          .about-float-1 { display: none !important; }
          .about-float-2 { left: 160px !important; top: -10px !important; }
          .about-float-3 { left: 155px !important; top: 175px !important; }
          .hero-name-h1 { font-size: clamp(38px, 12vw, 60px) !important; }
          .proj-img { height: 180px !important; }
          .cta-wrap { flex-direction: column !important; align-items: stretch !important; }
          .cta-wrap button, .cta-wrap a { width: 100% !important; justify-content: center !important; text-align: center !important; }
          .about-tags { gap: 7px !important; }
          .experience-pad { padding-left: 44px !important; }
          .tline-pos { left: 14px !important; }
          .tline-dot { left: 7px !important; }
        }
      `}</style>

      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.25 }} />

      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div className="orb1" style={{ position: 'absolute', top: '5%', left: '5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${goldA(0.03)} 0%, transparent 65%)`, filter: 'blur(60px)' }} />
        <div className="orb2" style={{ position: 'absolute', bottom: '10%', right: '5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,80,200,0.02) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      </div>

      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, transition: 'all .5s', background: scrolled ? 'rgba(7,5,3,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(24px)' : 'none', borderBottom: scrolled ? `1px solid ${borderGold}` : 'none' }}>
        <div className="header-pad" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => scrollTo('home')} style={{ fontFamily: display, fontSize: 24, letterSpacing: 4, color: gold, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>NN</button>

          <nav className="hd-nav" style={{ display: 'flex', gap: 36 }}>
            {['Home', 'Projects', 'About', 'Skills', 'Experience', 'Contact'].map(n => (
              <span key={n} className={`nav-a ${activeSection === n.toLowerCase() ? 'on' : ''}`} onClick={() => scrollTo(n.toLowerCase())}>{n}</span>
            ))}
          </nav>

          <div className="hd-btns" style={{ display: 'flex', gap: 12 }}>
            <button className="obtn" style={{ padding: '10px 22px', borderRadius: 2 }}>Download CV</button>
            <button className="gbtn" onClick={() => scrollTo('contact')} style={{ padding: '10px 24px', borderRadius: 2 }}>Let's Talk <ArrowRight size={12} /></button>
          </div>

          <button className="hd-mb" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', background: 'none', border: `1px solid ${borderGold}`, color: gold, cursor: 'pointer', padding: '9px 10px', borderRadius: 2, alignItems: 'center' }}>
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={{ background: 'rgba(7,5,3,0.97)', backdropFilter: 'blur(20px)', borderTop: `1px solid ${borderGold}`, padding: '24px 20px 32px' }}>
            {['Home', 'Projects', 'About', 'Skills', 'Experience', 'Contact'].map(n => (
              <div key={n} onClick={() => scrollTo(n.toLowerCase())} style={{ fontFamily: display, fontSize: 32, letterSpacing: 4, color: fgA(0.5), padding: '12px 0', borderBottom: `1px solid ${border}`, cursor: 'pointer' }}>{n}</div>
            ))}
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="obtn" style={{ padding: '13px 22px', borderRadius: 2, flex: 1, justifyContent: 'center' }}>CV</button>
              <button className="gbtn" onClick={() => scrollTo('contact')} style={{ padding: '13px 22px', borderRadius: 2, flex: 1, justifyContent: 'center' }}>Talk <ArrowRight size={12} /></button>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="hero-pad" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 40px 60px', zIndex: 2 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', width: '100%' }}>

          <div className="hbadge" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '7px 20px', border: `1px solid ${borderGold}`, background: goldA(0.05), borderRadius: 100, marginBottom: 44 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'pulse-dot 2s ease infinite' }} />
            <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: 3, color: goldA(0.75), textTransform: 'uppercase' }}>Available for Projects · Dubai, UAE</span>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: 8 }}>
            <h1 className="hero-name-h1" style={{ fontFamily: serif, fontSize: 'clamp(52px, 11vw, 148px)', fontWeight: 300, letterSpacing: '-3px', color: fg, margin: 0, lineHeight: 0.88 }}>
              {nameChars}
            </h1>
          </div>

          <div className="hero-bottom" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginTop: 44 }}>
            <div style={{ flex: 1, minWidth: 260, maxWidth: 560 }}>
              <p className="hsub" style={{ fontFamily: display, fontSize: 'clamp(18px, 3.5vw, 38px)', letterSpacing: 5, color: gold, marginBottom: 18, marginTop: 0 }}>Full-Stack Developer</p>
              <p className="hsub" style={{ fontSize: 15, lineHeight: 1.85, color: fgA(0.42), fontWeight: 300, marginBottom: 32, marginTop: 0 }}>
                Crafting production-ready applications with MERN stack expertise. Secure payment systems, cloud deployments, and real-time solutions for clients across UAE, India, and beyond.
              </p>
              <div className="cta-wrap" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button className="gbtn hcta" onClick={() => scrollTo('projects')} style={{ padding: '14px 32px', borderRadius: 2 }}>View Work <ArrowRight size={13} /></button>
                <button className="obtn hcta" onClick={() => scrollTo('contact')} style={{ padding: '14px 32px', borderRadius: 2 }}>Start Project</button>
              </div>
            </div>

            <div className="hero-stats hsub" style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-end' }}>
              {[['16+', 'Projects'], ['3+', 'Years Exp.'], ['5', 'Countries']].map(([n, l]) => (
                <div key={l} className="stat-row" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: 2, color: fgA(0.3), textTransform: 'uppercase' }}>{l}</span>
                  <span className="stat-num" style={{ fontFamily: display, fontSize: 48, color: gold, letterSpacing: 2, lineHeight: 1 }}>{n}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 28, marginTop: 52, flexWrap: 'wrap' }}>
            {[
              { icon: <Mail size={12} />, label: 'nazeehnahaban09@gmail.com', href: 'mailto:nazeehnahaban09@gmail.com' },
              { icon: <Phone size={12} />, label: '+971 50 788 9313', href: 'tel:+971507889313' }
            ].map((c, i) => (
              <a key={i} href={c.href} style={{ fontFamily: mono, fontSize: 10, letterSpacing: 2, color: fgA(0.3), textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color .3s' }}
                onMouseEnter={e => e.currentTarget.style.color = gold}
                onMouseLeave={e => e.currentTarget.style.color = fgA(0.3)}>
                {c.icon}{c.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${goldA(0.4)}, transparent)` }} />
          <span style={{ fontFamily: mono, fontSize: 9, letterSpacing: 4, color: goldA(0.25), textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </section>

      <div style={{ overflow: 'hidden', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, padding: '14px 0', position: 'relative', zIndex: 2 }}>
        <div className="mq1" style={{ display: 'inline-flex', gap: 40, whiteSpace: 'nowrap' }}>
          {Array(8).fill(['React.js', '◆', 'Node.js', '◆', 'MongoDB', '◆', 'Docker', '◆', 'AWS', '◆', 'Socket.io', '◆', 'Full-Stack Developer', '◆', 'Dubai Based', '◆']).flat().map((t, i) => (
            <span key={i} className="mq-text" style={{ fontFamily: display, fontSize: 13, letterSpacing: 3, color: t === '◆' ? gold : fgA(0.2), textTransform: 'uppercase' }}>{t}</span>
          ))}
        </div>
      </div>

      <section id="projects" className="section-pad" style={{ padding: '110px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>

          <div style={{ marginBottom: 56 }}>
            <div className="lbl" style={{ fontFamily: mono, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: gold, marginBottom: 20, display: 'inline-block' }}>Portfolio</div>
            <h2 className="clip-wipe" style={{ fontFamily: serif, fontSize: 'clamp(44px, 8vw, 100px)', fontWeight: 300, lineHeight: 0.9, color: fg, margin: '0 0 20px 0' }}>
              Featured <em style={{ fontStyle: 'italic', color: gold }}>Projects</em>
            </h2>
            <p style={{ color: fgA(0.38), fontSize: 15, maxWidth: 420, lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              {projects.length} production-ready applications built for clients across UAE, India, Saudi Arabia, and beyond.
            </p>
          </div>

          <div className="filter-row" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
            {[['all', `All (${projects.length})`], ['ecommerce', 'E-commerce'], ['services', 'Services'], ['healthcare', 'Healthcare'], ['platform', 'Platforms'], ['mobile', 'Mobile'], ['marketing', 'Marketing']].map(([v, l]) => (
              <button key={v} className={`fpill ${activeFilter === v ? 'on' : ''}`} onClick={() => setActiveFilter(v)}>{l}</button>
            ))}
          </div>

          <div className="proj-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>

            <div>
              <div className="pca" style={{ border: `1px solid ${border}`, borderRadius: 2, overflow: 'hidden', background: panel, position: 'relative' }}>
                {[
                  { top: 12, left: 12, borderTop: `1px solid ${goldA(0.3)}`, borderLeft: `1px solid ${goldA(0.3)}` },
                  { top: 12, right: 12, borderTop: `1px solid ${goldA(0.3)}`, borderRight: `1px solid ${goldA(0.3)}` },
                  { bottom: 12, left: 12, borderBottom: `1px solid ${goldA(0.3)}`, borderLeft: `1px solid ${goldA(0.3)}` },
                  { bottom: 12, right: 12, borderBottom: `1px solid ${goldA(0.3)}`, borderRight: `1px solid ${goldA(0.3)}` }
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: 28, height: 28, zIndex: 10, ...s }} />
                ))}

                <div className="pi proj-img" style={{ height: 300 }}>
                  <img src={cur.image} alt={cur.title} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,5,3,0.95) 0%, rgba(7,5,3,0.3) 55%, transparent)' }} />
                  <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                    <span className="stag" style={{ background: cur.color + '1a', color: cur.color, border: `1px solid ${cur.color}40` }}>{cur.type}</span>
                    {cur.link === '#' && <span className="stag" style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>Dev Phase</span>}
                  </div>
                  <div style={{ position: 'absolute', bottom: 18, right: 18, fontFamily: display, fontSize: 72, lineHeight: 1, color: goldA(0.07), pointerEvents: 'none', userSelect: 'none' }}>
                    {String(safeIdx + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="proj-details-pad" style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 3, color: goldA(0.45), textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                        <MapPin size={9} />{cur.location} · {cur.year}
                      </div>
                      <h3 style={{ fontFamily: serif, fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 500, color: fg, lineHeight: 1, margin: 0 }}>{cur.title}</h3>
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                      {cur.altLink && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                          <a href={cur.link} target="_blank" rel="noopener noreferrer" className="obtn" style={{ padding: '8px 16px', borderRadius: 2, textDecoration: 'none', fontSize: 10 }}>
                            Live <ExternalLink size={10} />
                          </a>
                          <span style={{ fontFamily: mono, fontSize: 9, letterSpacing: 1, color: goldA(0.4), textTransform: 'uppercase' }}>{cur.altLabel}</span>
                        </div>
                      )}
                      {!cur.altLink && cur.link !== '#' && (
                        <a href={cur.link} target="_blank" rel="noopener noreferrer" className="obtn" style={{ padding: '9px 16px', borderRadius: 2, textDecoration: 'none' }}>
                          Live <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p style={{ color: fgA(0.42), lineHeight: 1.8, marginBottom: 24, fontWeight: 300, fontSize: 14, marginTop: 0 }}>{cur.description}</p>

                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: goldA(0.35), marginBottom: 9 }}>Tech Stack</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {cur.tech.map((t, i) => <span key={i} className="stag" style={{ background: cur.color + '12', color: cur.color, border: `1px solid ${cur.color}25` }}>{t}</span>)}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: goldA(0.35), marginBottom: 9 }}>Features</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {cur.features.map((f, i) => (
                        <span key={i} style={{ padding: '4px 11px', border: `1px solid ${border}`, borderRadius: 2, fontSize: 11, fontFamily: mono, color: fgA(0.4), letterSpacing: 0.5 }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                <button onClick={prevProj} disabled={isAnimating} className="obtn" style={{ padding: '9px 20px', borderRadius: 2 }}>
                  <ChevronLeft size={13} /> Prev
                </button>
                <div style={{ display: 'flex', gap: 5, overflow: 'hidden', maxWidth: 'calc(100% - 180px)', flexWrap: 'nowrap' }}>
                  {filteredProjects.map((_, i) => (
                    <button key={i}
                      onClick={() => { if (!isAnimating) { setIsAnimating(true); setActiveProject(i); setTimeout(() => setIsAnimating(false), 500); } }}
                      style={{ width: i === safeIdx ? 24 : 5, height: 2, background: i === safeIdx ? gold : goldA(0.2), border: 'none', cursor: 'pointer', borderRadius: 1, transition: 'all .3s', padding: 0, flexShrink: 0 }} />
                  ))}
                </div>
                <button onClick={nextProj} disabled={isAnimating} className="obtn" style={{ padding: '9px 20px', borderRadius: 2 }}>
                  Next <ChevronRight size={13} />
                </button>
              </div>
            </div>

            <div className="proj-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ padding: 20, border: `1px solid ${border}`, borderRadius: 2, background: panel }}>
                <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: goldA(0.4), marginBottom: 16 }}>
                  Project {safeIdx + 1} / {filteredProjects.length}
                </div>
                {[
                  { icon: <MapPin size={13} />, l: 'Location', v: cur.location },
                  { icon: <Calendar size={13} />, l: 'Year', v: cur.year },
                  { icon: <Users size={13} />, l: 'Role', v: cur.role }
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < 2 ? `1px solid ${border}` : 'none' }}>
                    <div style={{ color: goldA(0.55), flexShrink: 0 }}>{d.icon}</div>
                    <div>
                      <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: fgA(0.22) }}>{d.l}</div>
                      <div style={{ fontSize: 13, color: fgA(0.65), marginTop: 2 }}>{d.v}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="proj-list-panel" style={{ padding: '16px 14px', border: `1px solid ${border}`, borderRadius: 2, background: panel, flex: 1, overflow: 'hidden' }}>
                <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: goldA(0.4), marginBottom: 12 }}>All Projects</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3, maxHeight: 420, overflowY: 'auto' }}>
                  {filteredProjects.map((p, i) => (
                    <button key={i}
                      className={`proj-list-btn ${i === safeIdx ? 'active-proj' : ''}`}
                      onClick={() => { if (!isAnimating) { setIsAnimating(true); setActiveProject(i); setTimeout(() => setIsAnimating(false), 500); } }}>
                      <div style={{ width: 32, height: 32, borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}>
                        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                        <div style={{ fontSize: 12, color: i === safeIdx ? gold : fgA(0.55), fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                        <div style={{ fontFamily: mono, fontSize: 9, color: fgA(0.25), letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{p.year}</div>
                      </div>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ overflow: 'hidden', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, padding: '14px 0', position: 'relative', zIndex: 2 }}>
        <div className="mq2" style={{ display: 'inline-flex', gap: 40, whiteSpace: 'nowrap', transform: 'translateX(-50%)' }}>
          {Array(8).fill(['Payment Integration', '◆', 'Cloud Deployment', '◆', 'API Design', '◆', 'MERN Stack', '◆', 'Real-time Apps', '◆', 'Microservices', '◆', 'Digital Marketing', '◆']).flat().map((t, i) => (
            <span key={i} className="mq-text" style={{ fontFamily: display, fontSize: 13, letterSpacing: 3, color: t === '◆' ? gold : fgA(0.18), textTransform: 'uppercase' }}>{t}</span>
          ))}
        </div>
      </div>

      <section id="about" className="section-pad" style={{ padding: '110px 40px', position: 'relative', zIndex: 2 }}>
        <div className="about-grid" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          <div className="abl">
            <div className="lbl" style={{ fontFamily: mono, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: gold, marginBottom: 20, display: 'inline-block' }}>About Me</div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, lineHeight: 0.92, color: fg, margin: '0 0 28px' }}>
              Crafting<br /><em style={{ fontStyle: 'italic', color: gold }}>Digital</em><br />Experiences
            </h2>
            <p style={{ color: fgA(0.45), lineHeight: 1.9, fontSize: 14, fontWeight: 300, marginBottom: 18, marginTop: 0 }}>
              Self-taught Full-Stack Developer with a passion for building scalable, production-ready web applications. Delivered solutions for clients across UAE, India, Saudi Arabia, and Europe.
            </p>
            <p style={{ color: fgA(0.35), lineHeight: 1.9, fontSize: 14, fontWeight: 300, marginBottom: 32, marginTop: 0 }}>
              From staycation booking platforms to hotel reservation systems and multi-vendor marketplaces — I bridge technical excellence with real business value.
            </p>
            <div className="about-tags" style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
              {['Dubai Based', 'Available Worldwide', 'MERN Expert', 'Cloud Native', 'API Specialist'].map((t, i) => (
                <span key={i} style={{ padding: '7px 14px', border: `1px solid ${borderGold}`, color: goldA(0.55), fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', borderRadius: 2 }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="abr" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="about-orb-wrap" style={{ position: 'relative', width: 320, height: 320 }}>
              <div className="ring-spin" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `1px solid ${goldA(0.12)}`, borderTop: `1px solid ${goldA(0.55)}` }} />
              <div className="ring-spin-rev" style={{ position: 'absolute', inset: 22, borderRadius: '50%', border: `1px solid ${goldA(0.08)}`, borderBottom: `1px solid ${goldA(0.4)}` }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '32px 40px', border: `1px solid ${borderGold}`, background: goldA(0.04), borderRadius: 4, textAlign: 'center' }}>
                  <div style={{ fontFamily: display, fontSize: 48, letterSpacing: 5, color: gold, lineHeight: 1 }}>NN</div>
                  <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: goldA(0.4), marginTop: 8 }}>Full Stack Dev</div>
                </div>
              </div>
              {[
                { n: '16+', l: 'Projects', x: -44, y: -48, c: gold, cls: 'about-float-1' },
                { n: '3+', l: 'Years', x: 278, y: -20, c: '#C470E8', cls: 'about-float-2' },
                { n: '5', l: 'Countries', x: 272, y: 268, c: gold, cls: 'about-float-3' }
              ].map((d, i) => (
                <div key={i} className={`cc ${d.cls}`} style={{ position: 'absolute', left: d.x, top: d.y, padding: '11px 16px', background: 'rgba(7,5,3,0.88)', border: `1px solid ${d.c}30`, borderRadius: 2, textAlign: 'center' }}>
                  <div style={{ fontFamily: display, fontSize: 24, color: d.c, lineHeight: 1 }}>{d.n}</div>
                  <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: fgA(0.3), marginTop: 4 }}>{d.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-pad" style={{ padding: '110px 40px', background: 'rgba(255,255,255,0.01)', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="lbl" style={{ fontFamily: mono, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: gold, marginBottom: 20, display: 'inline-block' }}>Expertise</div>
              <h2 className="clip-wipe" style={{ fontFamily: serif, fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, lineHeight: 0.92, color: fg, margin: 0 }}>
                Technical <em style={{ fontStyle: 'italic', color: gold }}>Skills</em>
              </h2>
            </div>
            <p style={{ color: fgA(0.32), fontSize: 14, maxWidth: 280, lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              Proficient across the full web development stack with deep MERN specialization.
            </p>
          </div>

          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 2 }}>
            {skills.map((sk, i) => (
              <div key={i} className="cc" style={{ padding: '18px 20px', border: `1px solid ${border}`, borderRadius: 2, background: 'transparent', transition: 'background .3s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = goldA(0.03)}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 15 }}>{sk.icon}</span>
                    <span style={{ fontSize: 14, color: fgA(0.75), fontWeight: 400 }}>{sk.name}</span>
                  </div>
                  <span style={{ fontFamily: display, fontSize: 18, color: gold, letterSpacing: 1 }}>{sk.level}</span>
                </div>
                <div style={{ height: 1, background: border, borderRadius: 1 }}>
                  <div className="sbar" data-w={sk.level} style={{ height: '100%', background: `linear-gradient(90deg, #b8902a, #e8c870)`, borderRadius: 1, width: '0%', boxShadow: `0 0 6px ${goldA(0.35)}` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44, paddingTop: 44, borderTop: `1px solid ${border}`, textAlign: 'center' }}>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: goldA(0.3), marginBottom: 18 }}>Also Working With</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, justifyContent: 'center' }}>
              {['Stripe', 'Razorpay', 'AFS Payment', 'WebRTC', 'Firebase', 'Cloudinary', 'Kubernetes', 'Nginx', 'JWT', 'OAuth2', 'Vercel', 'GitHub Actions', 'Elasticsearch'].map((t, i) => (
                <span key={i} className="cc" style={{ padding: '6px 14px', border: `1px solid ${border}`, borderRadius: 2, fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: fgA(0.28), cursor: 'default', transition: 'all .3s', display: 'inline-block' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = borderGold; e.currentTarget.style.color = goldA(0.7); }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = fgA(0.28); }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad" style={{ padding: '110px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div className="lbl" style={{ fontFamily: mono, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: gold, marginBottom: 20, display: 'inline-block' }}>Career</div>
            <h2 className="clip-wipe" style={{ fontFamily: serif, fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, lineHeight: 0.92, color: fg, margin: 0 }}>
              Work <em style={{ fontStyle: 'italic', color: gold }}>Experience</em>
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="tline tline-pos" style={{ position: 'absolute', left: 19, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, ${goldA(0.5)}, ${goldA(0.1)})`, transformOrigin: 'top center' }} />
            {experiences.map((ex, i) => (
              <div key={i} className="experience-pad" style={{ paddingLeft: 56, paddingBottom: i < experiences.length - 1 ? 52 : 0, position: 'relative' }}>
                <div className="tline-dot" style={{ position: 'absolute', left: 12, top: 22, width: 15, height: 15, borderRadius: '50%', background: ex.color, boxShadow: `0 0 0 3px ${bg}, 0 0 0 5px ${ex.color}40, 0 0 18px ${ex.color}60` }} />
                <div className="ecard cc" style={{ padding: '24px 26px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: serif, fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 500, color: fg, margin: 0 }}>{ex.title}</h3>
                    <span style={{ fontFamily: mono, fontSize: 9, letterSpacing: 2, color: goldA(0.5), textTransform: 'uppercase', padding: '5px 11px', border: `1px solid ${borderGold}`, borderRadius: 2, background: goldA(0.05), whiteSpace: 'nowrap' }}>{ex.period}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, color: ex.color, fontWeight: 500 }}>{ex.company}</span>
                    <span style={{ color: fgA(0.18) }}>·</span>
                    <span style={{ fontFamily: mono, fontSize: 10, color: fgA(0.35), letterSpacing: 1, textTransform: 'uppercase' }}>{ex.location}</span>
                  </div>
                  <p style={{ color: fgA(0.38), lineHeight: 1.8, fontSize: 14, fontWeight: 300, margin: 0 }}>{ex.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ padding: '110px 40px', background: 'rgba(255,255,255,0.01)', borderTop: `1px solid ${border}`, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="lbl" style={{ fontFamily: mono, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: gold, marginBottom: 20, display: 'inline-block' }}>Services</div>
            <h2 className="clip-wipe" style={{ fontFamily: serif, fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, lineHeight: 0.92, color: fg, margin: 0 }}>
              What I <em style={{ fontStyle: 'italic', color: gold }}>Provide</em>
            </h2>
          </div>

          <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 1, border: `1px solid ${border}` }}>
            {[
              { n: '01', t: 'Full-Stack Development', d: 'End-to-end web apps — from database architecture to responsive UI — built for scale and performance.' },
              { n: '02', t: 'Secure API Design', d: 'RESTful and GraphQL APIs with JWT auth, rate limiting, and industry-best security practices.' },
              { n: '03', t: 'Cloud Deployment', d: 'Docker containerization, AWS S3, Google Cloud Run with CI/CD pipelines and automated scaling.' },
              { n: '04', t: 'Payment Integration', d: 'Stripe, Razorpay, and AFS payment gateways with secure, PCI-compliant transaction handling.' },
              { n: '05', t: 'Mobile Development', d: 'React Native cross-platform apps for iOS and Android with native performance and UX.' },
              { n: '06', t: 'Support & Maintenance', d: 'Ongoing technical support, security updates, performance optimization, and new features.' }
            ].map((sv, i) => (
              <div key={i} className={`svc-card svc-item cc`} style={{ padding: '28px 24px', borderRight: (i % 3 !== 2) ? `1px solid ${border}` : 'none', borderBottom: (i < 3) ? `1px solid ${border}` : 'none', overflow: 'hidden' }}>
                <div style={{ fontFamily: display, fontSize: 48, color: goldA(0.06), position: 'absolute', top: 8, right: 14, lineHeight: 1, pointerEvents: 'none' }}>{sv.n}</div>
                <h3 style={{ fontFamily: serif, fontSize: 21, fontWeight: 500, color: fg, marginBottom: 11, marginTop: 0 }}>{sv.t}</h3>
                <p style={{ color: fgA(0.35), fontSize: 14, lineHeight: 1.8, fontWeight: 300, margin: 0 }}>{sv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad" style={{ padding: '110px 40px 80px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <div className="lbl" style={{ fontFamily: mono, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: gold, marginBottom: 20, display: 'inline-block' }}>Contact</div>
          <h2 className="clip-wipe" style={{ fontFamily: serif, fontSize: 'clamp(44px, 9vw, 110px)', fontWeight: 300, lineHeight: 0.88, color: fg, margin: '0 0 18px' }}>
            Let's Build<br /><em style={{ fontStyle: 'italic', color: gold }}>Together</em>
          </h2>
          <p style={{ color: fgA(0.35), fontSize: 15, maxWidth: 360, margin: '0 auto 48px', lineHeight: 1.8, fontWeight: 300 }}>
            Have a project in mind? I'd love to discuss how we can bring your ideas to life.
          </p>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 36 }}>
            {[
              { icon: <Mail size={18} />, t: 'Email', v: 'nazeehnahaban09@gmail.com', href: 'mailto:nazeehnahaban09@gmail.com', c: '#E8C170' },
              { icon: <span style={{ fontSize: 18 }}>💬</span>, t: 'WhatsApp', v: '+91 9207904611', href: 'https://wa.me/919207904611', c: '#70E8C1' },
              { icon: <Phone size={18} />, t: 'Phone (UAE)', v: '+971 50 788 9313', href: 'tel:+971507889313', c: '#70B8E8' },
              { icon: <Linkedin size={18} />, t: 'LinkedIn', v: 'nazeeh-nahaban', href: 'https://www.linkedin.com/in/nazeeh-nahaban', c: '#C470E8' }
            ].map((ct, i) => (
              <a key={i} href={ct.href} target="_blank" rel="noopener noreferrer" className="ccard"
                style={{ display: 'block', padding: '24px 18px', border: `1px solid ${border}`, borderRadius: 2, textDecoration: 'none', background: panel, textAlign: 'left', transition: 'all .4s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ct.c + '55'; e.currentTarget.style.background = ct.c + '08'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.background = panel; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ color: ct.c, marginBottom: 12 }}>{ct.icon}</div>
                <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: fgA(0.28), marginBottom: 5 }}>{ct.t}</div>
                <div style={{ fontSize: 12, color: fgA(0.6), fontWeight: 400, wordBreak: 'break-all' }}>{ct.v}</div>
              </a>
            ))}
          </div>

          <div style={{ padding: '36px 32px', border: `1px solid ${borderGold}`, borderRadius: 2, background: goldA(0.04) }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', margin: '0 auto 14px', boxShadow: '0 0 10px #4ade80', animation: 'pulse-dot 2s ease infinite' }} />
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: goldA(0.5), marginBottom: 24, marginTop: 0 }}>Available for Freelance & Full-time Opportunities</p>
            <button className="gbtn" onClick={() => { window.location.href = 'mailto:nazeehnahaban09@gmail.com'; }} style={{ padding: '15px 40px', borderRadius: 2 }}>
              Start a Conversation <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '32px 40px', borderTop: `1px solid ${border}`, position: 'relative', zIndex: 2 }}>
        <div className="footer-row" style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontFamily: display, fontSize: 20, letterSpacing: 4, color: gold }}>NAZEEH NAHABAN</div>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: fgA(0.22), marginTop: 4 }}>Full-Stack Developer · Dubai, UAE</div>
          </div>
          <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: 1.5, color: fgA(0.18), margin: 0 }}>© {new Date().getFullYear()} All rights reserved</p>
          <div style={{ display: 'flex', gap: 9 }}>
            {[
              { icon: <Github size={14} />, href: 'https://github.com' },
              { icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/in/nazeeh-nahaban' },
              { icon: <Mail size={14} />, href: 'mailto:nazeehnahaban09@gmail.com' }
            ].map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 34, height: 34, border: `1px solid ${borderGold}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: goldA(0.4), textDecoration: 'none', transition: 'all .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.color = gold; e.currentTarget.style.background = goldA(0.07); }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = borderGold; e.currentTarget.style.color = goldA(0.4); e.currentTarget.style.background = 'transparent'; }}>
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;