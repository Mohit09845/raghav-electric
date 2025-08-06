import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group flex flex-col"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* UPDATED: Image container is now a consistent square */}
      <div className="relative w-full aspect-square bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          // UPDATED: Shows a placeholder if the image fails to load
          onError={(e) => { 
            e.target.onerror = null; 
          }}
        />
        <div className="absolute top-2 right-2 bg-indigo-100 text-indigo-600 text-xs font-semibold px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
