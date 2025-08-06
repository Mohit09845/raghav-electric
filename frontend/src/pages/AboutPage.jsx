import { motion } from 'framer-motion';
import { Building, Target, Eye } from 'lucide-react';

import storefrontImage from '../assets/storefront.png'; 

const AboutPage = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">About Raghav Electrical</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Powering our community with reliable solutions and trusted service for over a decade.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Story */}
          <motion.div 
            className="lg:col-span-3"
            {...fadeInAnimation}
          >
            <div className="flex items-center text-indigo-600 mb-4">
              <Building className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Founded in 2010 by Mr. Raghav, our journey began from a small shop in the heart of Pimpri-Chinchwad with a simple goal: to provide high-quality electrical goods and honest service to our neighbors. We saw a need for a local supplier who not only sold products but also understood the challenges our customers faced.
              </p>
              <p>
                Over the years, as our community grew, so did we. We expanded our inventory, embraced new technologies like home automation and solar energy, and built a team of dedicated professionals. Today, Raghav Electrical is a leading name in the region, but our core values of integrity, quality, and customer-first service remain unchanged.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Storefront Image */}
          <motion.div 
            className="lg:col-span-2"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
          >
            <img 
              src={storefrontImage} 
              alt="Raghav Electrical storefront" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x700/e0e7ff/4338ca?text=Our+Storefront'; }}
            />
          </motion.div>
        </div>

        {/* Vision and Mission Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div {...fadeInAnimation}>
                <div className="flex items-center text-green-600 mb-4">
                    <Eye className="h-8 w-8 mr-3" />
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600">
                    To be the most trusted and innovative electrical solutions provider in the region, empowering every home and business with safe, sustainable, and smart energy.
                </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              {...fadeInAnimation}
              transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
            >
                <div className="flex items-center text-red-600 mb-4">
                    <Target className="h-8 w-8 mr-3" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600">
                    To deliver superior quality products and expert services with a commitment to safety, reliability, and customer satisfaction, while fostering long-term relationships within our community.
                </p>
            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
