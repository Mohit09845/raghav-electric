import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;
    return (
        <motion.div
            className="relative rounded-2xl overflow-hidden group h-96"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}>
            {/* Background Image */}
            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Icon */}
            <div className={`absolute top-4 right-4 p-3 rounded-full ${service.iconBgColor} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={`h-6 w-6 ${service.iconColor}`} />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <a href="#" className="flex items-center text-lg font-medium group-hover:text-red-400 transition-colors">
                    View service
                    <ArrowRight className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
        </motion.div>
    );
};

export default ServiceCard;