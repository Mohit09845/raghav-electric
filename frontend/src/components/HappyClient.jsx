import { motion } from 'framer-motion';

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

const clientLogos = [
  { name: 'Client 1', logo: logo1 },
  { name: 'Client 2', logo: logo2 },
  { name: 'Client 3', logo: logo3 },
  { name: 'Client 4', logo: logo7 },
  { name: 'Client 5', logo: logo6 },
  { name: 'Client 6', logo: logo5 },
  { name: 'Client 7', logo: logo4 },
];

const HappyClients = () => {
  return (
    <>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .scrolling-wrapper {
          animation: scroll 7s linear infinite;
        }
      `}</style>

      <section 
        className="py-20" 
        style={{
          background: "linear-gradient(135deg, #f0f4f8 0%, #dbeafe 50%, #bfdbfe 100%)"
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800">
              Our Happy Clients
            </h2>
          </motion.div>
        </div>
        
        {/* The scrolling container */}
        <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div className="flex w-max">
            {/* The duplicated list of logos for a seamless loop */}
            <div className="flex items-center justify-center scrolling-wrapper">
              {clientLogos.map((client, index) => (
                <div key={`${client.name}-${index}`} className="mx-8 flex-shrink-0">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center scrolling-wrapper" aria-hidden="true">
              {clientLogos.map((client, index) => (
                <div key={`${client.name}-${index}-duplicate`} className="mx-8 flex-shrink-0">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HappyClients;
