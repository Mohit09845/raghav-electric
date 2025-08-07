import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

import experienceImage from '../assets/experience-image.png';
import commitmentImage from '../assets/commitment-image.jpg';
import emergencyServicesImage from '../assets/emergency-services-image.jpg';

const images = [image1, image2, image3];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-tr from-gray-50 via-blue-50 to-purple-100">
      <section className="relative container mx-auto px-6 pt-16 pb-8 md:pt-20 flex flex-col md:flex-row items-center z-10">
        <motion.div
          className="flex-1 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 leading-tight">
              Powering Dreams, Brightening Lives
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Reliable and safe solutions for homes & businesses. 24/7 expertise from trusted professionals.
          </p>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-500 shadow-lg text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            onClick={() => navigate('/services')}
          >
            View Services
          </motion.button>
        </motion.div>

        <div className="relative flex-1 flex justify-center h-96">
          <div className="rounded-2xl shadow-2xl w-full h-full overflow-hidden relative bg-white">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Feature slide"
                className="absolute w-full h-full object-cover"
                custom={direction}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            <div className="absolute bottom-0 w-full flex justify-center gap-3 pb-4 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-3 w-3 rounded-full border-2 ${
                    idx === currentIndex
                      ? 'bg-indigo-600 border-indigo-700'
                      : 'border-gray-300 bg-white/40'
                  }`}
                  style={{ transition: 'background 0.3s' }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-5 gap-12 items-center px-6 py-8">
          <motion.img
            src={experienceImage}
            alt="Experienced electrician at work"
            className="w-full max-w-md md:col-span-2 rounded-2xl shadow-xl mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '';
            }}
          />

          <div className="md:col-span-3 flex flex-col gap-6">
            <motion.div
              className="bg-white border-l-4 border-indigo-300 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-5xl font-extrabold text-indigo-600 mb-2 drop-shadow">10+</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Years of Experience</h3>
              <p className="text-gray-700">
                Delivering quality, safety, and trust across thousands of projects since 2010. Our certified electricians are known for reliability, speed, and a customer-first approach.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border-l-4 border-indigo-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Skilled Team & Modern Tools</h3>
              <p className="text-gray-700">
                We combine years of field experience with modern equipment and up-to-date safety protocols to ensure each job is done right the first time. From residential wiring to complex commercial systems, we handle it all.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto grid md:grid-cols-5 gap-12 items-center px-6 py-8">
          <motion.div
            className="md:col-span-2 md:order-2 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={commitmentImage}
              alt="Commitment to quality"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '';
              }}
            />
          </motion.div>
          <motion.div
            className="md:col-span-3 md:order-1 bg-green-50 border-l-4 border-green-300 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Commitment</h3>
            <p className="text-gray-700 mb-2">
              Your peace of mind matters. We use only the best materials, every project inspected for safety and longevity.
            </p>
            <span className="block mt-2 font-semibold text-green-700">“Safety first—every time.”</span>
          </motion.div>
        </div>

        <div className="container mx-auto grid md:grid-cols-5 gap-12 items-center px-6 py-8">
          <motion.img
            src={emergencyServicesImage}
            alt="Emergency electrical services"
            className="md:col-span-2 rounded-2xl shadow-xl mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '';
            }}
          />
          <motion.div
            className="md:col-span-3 bg-blue-50 border-l-4 border-blue-400 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-5xl font-extrabold text-blue-600 mb-2">24/7</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Emergency Services</h3>
            <p className="text-gray-700">
              Always a call away for urgent issues. Your safety and convenience are our priorities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white shadow-inner">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl italic text-gray-700 leading-relaxed">
              “The Raghav Electrical team is always prompt and professional—my go-to experts for anything electrical.”
            </blockquote>
            <cite className="block mt-6 font-semibold text-blue-700 text-lg">
              - Satisfied Customer
            </cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
