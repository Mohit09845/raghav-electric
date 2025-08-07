import { motion } from 'framer-motion';
import { Wrench, Cable, Home, Sun } from 'lucide-react';

import electricalInstallationImage from '../assets/electrical-panel.jpg';
import wiringImage from '../assets/wiring.jpg';
import homeAutomationImage from '../assets/home-automation.jpg';
import solarImage from '../assets/solar.jpg';

const servicesData = [
  {
    title: 'Electrical Installation',
    description: 'From single socket installations to complete home or office wiring, our certified electricians ensure every job is done safely and to the highest industry standards. We handle lighting, panels, and all major electrical setups.',
    image: electricalInstallationImage,
    icon: Wrench,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Wiring & Rewiring',
    description: 'Whether you\'re building a new property or upgrading an old one, our expert wiring services guarantee a safe and reliable electrical infrastructure. We troubleshoot and repair faulty wiring to prevent hazards.',
    image: wiringImage,
    icon: Cable,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Home Automation',
    description: 'Step into the future with our smart home solutions. We install and configure automated lighting, security systems, smart thermostats, and more, giving you complete control over your home\'s environment from your smartphone.',
    image: homeAutomationImage,
    icon: Home,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Solar Consultation',
    description: 'Thinking of going green? Our solar experts provide comprehensive consultations to help you understand the benefits of solar energy. We design and install efficient solar panel systems tailored to your energy needs.',
    image: solarImage,
    icon: Sun,
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-indigo-50 py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            ⚡️ Comprehensive Electrical Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Professional solutions for all your residential and commercial needs.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="space-y-20">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className={`p-8 rounded-3xl shadow-lg ${service.bgColor}`}
                {...fadeInUp}
              >
                <div className="grid md:grid-cols-5 gap-12 items-center">
                  {/* Image */}
                  <motion.div
                    className={`md:col-span-2 rounded-2xl overflow-hidden shadow-xl ${isReversed ? 'md:order-2' : ''
                      }`}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className={`md:col-span-3 ${isReversed ? 'md:order-1' : ''}`}
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.2 }}
                  >
                    <div className={`flex items-center mb-4 ${service.iconColor}`}>
                      <Icon className="h-10 w-10 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
