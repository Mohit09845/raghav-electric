import { motion } from 'framer-motion';
import { Building, Target, Eye, Users } from 'lucide-react';

import storefrontImage from '../assets/storefront.png';

const teamData = [
  { name: 'Gaurav Singh', title: 'Founder & CEO', image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Priya Sharma', title: 'Lead Electrician', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGIO7Yv0hm1CddARr645uEdokHRRJ1mPtmw&s' },
  { name: 'Amit Patel', title: 'Operations Manager', image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Sunita Rao', title: 'Customer Support', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const AboutPage = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true }
  };

  const teamContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const teamCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* --- NEW HEADER SECTION --- */}
      <div className="bg-gray-900 text-white text-center py-20">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Raghav Electrical
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Powering our community with reliable solutions and trusted service for over a decade.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
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
              <p>
                Our commitment extends beyond just sales. We believe in educating our customers, helping them make informed decisions that are both energy-efficient and cost-effective. Whether it's a simple wiring job or a complex solar panel installation, our team is here to provide expert guidance and support every step of the way.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
          >
            <img
              src={storefrontImage}
              alt="Raghav Electrical storefront"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Vision and Mission Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* --- UPDATED VISION BLOCK --- */}
          <motion.div {...fadeInAnimation} className="bg-green-50 p-8 rounded-2xl border border-green-200">
            <div className="flex items-center text-green-600 mb-4">
              <Eye className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600">
              To be the most trusted and innovative electrical solutions provider in the region, empowering every home and business with safe, sustainable, and smart energy.
            </p>
          </motion.div>
          {/* --- UPDATED MISSION BLOCK --- */}
          <motion.div
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
            className="bg-red-50 p-8 rounded-2xl border border-red-200"
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

        {/* --- UPDATED TEAM SECTION --- */}
        <div className="mt-24 bg-gray-100 py-20 -mx-6 px-6 md:rounded-3xl">
          <motion.div className="text-center mb-12 container mx-auto" {...fadeInAnimation}>
            <div className="flex justify-center items-center text-indigo-600 mb-4">
              <Users className="h-10 w-10" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              The dedicated professionals behind our success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto"
            variants={teamContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamData.map((member) => (
              <motion.div
                key={member.name}
                className="text-center"
                variants={teamCardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-indigo-600">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
