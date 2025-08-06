import { motion } from 'framer-motion';
import { Wrench, Cable, Home, Sun } from 'lucide-react';

import electricalInstallationImage from '../assets/electrical-panel.jpg';
import wiringImage from '../assets/electrical-panel.jpg'; 
import homeAutomationImage from '../assets/home-automation.jpg'; 
import solarImage from '../assets/solar.jpg'; 

import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    title: 'Electrical Installation',
    image: electricalInstallationImage,
    icon: Wrench,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Wiring',
    image: wiringImage,
    icon: Cable,
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  {
    title: 'Home Automation',
    image: homeAutomationImage,
    icon: Home,
    iconBgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-500',
  },
  {
    title: 'Solar Consultation',
    image: solarImage,
    icon: Sun,
    iconBgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-500',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Comprehensive electrical services
          </h1>
        </motion.div>

        {/* Services Grid (now a 4-column grid for the new services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;