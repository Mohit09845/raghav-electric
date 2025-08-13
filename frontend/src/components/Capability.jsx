import { motion } from 'framer-motion';
import { Search, Building2, Link, FileText, Briefcase, Lightbulb, Settings, Users, Leaf, BarChart2, Wrench } from 'lucide-react';

const capabilitiesData = [
  { title: 'Feasibility Study', icon: Search },
  { title: 'Basebuild Design', icon: Building2 },
  { title: 'Hookup Design', icon: Link },
  { title: 'Tendering', icon: FileText },
  { title: 'Project Management', icon: Briefcase },
  { title: 'Strategic Procurement Advice', icon: Lightbulb },
  { title: 'EPCM', icon: Settings },
  { title: 'General Planner', icon: Users },
  { title: 'Energy Saving Solution', icon: Leaf },
  { title: 'Project Controlling', icon: BarChart2 },
  { title: 'Testing, Commissioning, Startup', icon: Wrench },
];

// Staggered container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Capability = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6">

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Discover our Capabilities
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            We bring expertise across all project stages — from concept to commissioning.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilitiesData.map((capability, index) => {
            const Icon = capability.icon;
            const isLast = index === capabilitiesData.length - 1;

            return (
              <motion.div
                key={capability.title}
                className={`bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-300 transition-colors duration-300
          ${isLast ? 'lg:col-start-3' : ''}`} // Center in last row for lg (5 cols)
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 12px 20px -3px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.06)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-700">{capability.title}</h3>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Capability;
