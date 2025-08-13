import { motion } from 'framer-motion';
import cementImage from "../assets/cement-industry.jpg";
import steelImage from "../assets/steel-industry.jpg";
import portImage from "../assets/port-industry.jpg";

const industriesTop = [
  { name: 'Bulk Material Handling', image: 'https://raghavelectric.com/images/reclaimer.jpg' },
  { name: 'Cement Industries', image: cementImage },
  { name: 'Steel Industries', image: steelImage },
  { name: 'Oil and Gas Industries', image: 'https://raghavelectric.com/images/s4.webp' },
];

const industriesBottom = [
  { name: 'Renewable Energy', image: 'https://raghavelectric.com/images/renewable_energy.jpg' },
  { name: 'Power Plant', image: 'https://raghavelectric.com/images/power_plant.jpg' },
  { name: 'Port Handling', image: portImage },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

const overlayVariants = {
  hidden: { opacity: 0.6 }, 
  visible: { opacity: 0, transition: { duration: 0.8, ease: "easeOut" } } 
};

const IndustryCard = ({ industry, height }) => (
  <motion.div
    className={`relative rounded-lg overflow-hidden shadow-lg group ${height}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
  >
    {/* Image */}
    <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />

    {/* Dark overlay that fades out */}
    <motion.div
      className="absolute inset-0 bg-black"
      variants={overlayVariants}
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }} // fixed opacity color
    />

    {/* Text */}
    <motion.div
      className="absolute inset-0 flex items-end justify-center pb-6"
      variants={textVariants}
    >
      <h3 className="text-white text-xl font-bold text-center [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">
        {industry.name}
      </h3>
    </motion.div>
  </motion.div>
);

const WhoweServe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Whom We Serve</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Providing expert electrical solutions across a wide range of industries.
          </p>
        </motion.div>

        {/* Top 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {industriesTop.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} height="h-64" />
          ))}
        </div>

        {/* Bottom 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industriesBottom.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} height="h-72" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoweServe;