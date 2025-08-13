import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import WhomWeServe from '../components/WhoweServe';
import HappyClients from '../components/HappyClient';
import Contact from '../components/Contact';
import AboutSection from '../components/About';
import Capabilities from '../components/Capability';

import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.jpg';
import image4 from "../assets/img4.jpg";

const slides = [
  {
    image: image1,
    title: "Panel Manufacturing",
    subtitle: "Our panels are of superior quality, built with precision and durability."
  },
  {
    image: image2,
    title: "Motor Winding",
    subtitle: "Expert motor winding services ensuring reliability and performance."
  },
  {
    image: image3,
    title: "Design Engineering",
    subtitle: "We have extensive experience in overseas electrical design projects."
  },
  {
    image: image4,
    title: "E-House Solutions",
    subtitle: "Custom-built E-House units for industrial and commercial needs."
  }
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };


  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <main className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">

        {/* Background Image Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].title}
            className="relative z-10 p-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h1
              variants={headingVariants}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg"
            >
              {slides[currentIndex].title}
            </motion.h1>

            <motion.p
              variants={subtitleVariants}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md"
            >
              {slides[currentIndex].subtitle}
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
              onClick={() => navigate('/services')}
            >
              View services
            </motion.button>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={48} className="text-white/70" />
        </motion.div>
      </main>

      {/* Other Sections */}
      <AboutSection />
      <Capabilities />
      <WhomWeServe />
      <HappyClients />
      <Contact />
    </div>
  );
};

export default HomePage;
