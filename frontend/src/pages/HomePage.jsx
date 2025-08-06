import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const images = [image1, image2, image3];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: '#4338ca' }}>
              Reliable electric services for every need
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              From small repairs to large-scale installations, our licensed electricians are here to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
              onClick={() => navigate('/services')}
            >
              View services
            </motion.button>
          </motion.div>

          {/* Right Column: Image Slider */}
          <div className="hidden md:block relative h-96 overflow-hidden rounded-lg shadow-2xl">
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Raghav Electrical products promotion"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Experience */}
          <motion.div 
            className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center"
            initial={fadeInAnimation.initial}
            whileInView={fadeInAnimation.animate}
            transition={{ ...fadeInAnimation.transition, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-red-500 mb-2">10+</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Years of experience</h3>
            <p className="text-gray-600">We are delivering reliable and safe electrical services.</p>
          </motion.div>

          {/* Card 2: Emergency Services */}
          <motion.div 
            className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center"
            initial={fadeInAnimation.initial}
            whileInView={fadeInAnimation.animate}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-2">24/7</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Emergency services</h3>
            <p className="text-gray-600">Always ready to assist with electrical issues day.</p>
          </motion.div>

          {/* Testimonial */}
          <motion.div 
            className="md:col-span-1 pt-4"
            initial={fadeInAnimation.initial}
            whileInView={fadeInAnimation.animate}
            transition={{ ...fadeInAnimation.transition, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              “We've been using electrical power for our commercial properties for years. Their expertise and attention to detail are unmatched. I highly recommend them for any electrical work!”
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;