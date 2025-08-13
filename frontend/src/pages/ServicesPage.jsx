import { motion } from 'framer-motion';
import { PenTool, Cable, CircuitBoard, Layout, Zap, Lightbulb, Home, Wrench, ShieldCheck } from 'lucide-react';

const servicesData = [
  {
    title: 'Design Engineering',
    icon: PenTool,
    items: ['Design Drafting', 'Preparation of Single Line Diagram', 'General Arrangement & Schematic Diagrams', 'Preparation of Bill Of Materials', 'Busbar / BBT Design', 'Preparation of Key Single Line Diagrams']
  },
  {
    title: 'Cable Engineering',
    icon: Cable,
    items: ['Cable Sizing', 'Cable Glands & Lugs', 'Cable Schedules', 'Interconnection Details', 'Loop wiring Diagram', 'Cable Termination Schedules']
  },
  {
    title: 'Equipment Engineering',
    icon: CircuitBoard,
    items: ['ECR Equipment Layout', 'Electrical Equipment Engineering', 'Instrumentation Engineering']
  },
  {
    title: 'Layout Engineering',
    icon: Layout,
    items: ['Cable Tray Routing', 'Cable gallery', 'Tray sizing', 'Tray routing & BOQ']
  },
  {
    title: 'Earthing & Lightning',
    icon: Zap,
    items: ['Earthing Design & Sizing', 'Preparation of BOM', 'Layouts and Typical Installations']
  },
  {
    title: 'Lighting',
    icon: Lightbulb,
    items: ['Lighting Load Calculations & Distributions', 'Layouts and Typical Connections', 'Dialux Calculation']
  },
  {
    title: 'PLC and Panel Engineering',
    icon: ShieldCheck,
    items: ['PLC/DCS Panel GA & IGA Drawings', 'System Architecture', 'IO Allocation', 'Power & Control Schematics', 'Wiring & Interconnection Details', 'Load list & Power Balancing', 'Bus bar Engineering', 'MCT System Engineering']
  },
  {
    title: 'E House Services',
    icon: Home,
    items: ['E House Sizing', 'E House Supplying', 'Panel Location Layout']
  },
  {
    title: 'Winding Services',
    icon: Wrench,
    items: ['All types of Motor Winding', 'Control Trafo Winding', 'DC Motor Winding', 'Motor Connection Winding', 'Motor Lathe Works', 'Annual Maintanence of Motors (AMC)', 'DOL and Star Delta Starters Services']
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-6">

        {/* Header with new background */}
        <div className="bg-gray-900 rounded-3xl mb-20">
          <motion.div
            className="text-center p-12 md:p-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Our Expertise & Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              End-to-end electrical and automation solutions tailored for industrial excellence.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full border border-gray-100"
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-full mr-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                </div>
                <ul className="space-y-2 text-gray-600 flex-grow">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1.5">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
