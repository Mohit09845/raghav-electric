import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; 
import { Search, Tag, Loader2 } from 'lucide-react'; 
import ProductCard from '../components/ProductCard';

const API_URL = import.meta.env.VITE_API_URL;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // 2. Add loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/product`);
        setProducts(response.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError('Could not load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on mount

  const categories = ['All', ...new Set(products.map(p => p.category))];

  // This useEffect for filtering remains the same
  useEffect(() => {
    let result = products;
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Browse our collection of high-quality electrical goods.
          </p>
        </motion.div>

        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm flex flex-col md:flex-row gap-4 items-center">
          {/* Filter and Search UI remains the same */}
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Tag className="h-5 w-5 text-gray-500 flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Conditional rendering for loading, error, and data states */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 text-indigo-600 animate-spin" />
          </div>
        ) : error ? (
          <p className="col-span-full text-center text-red-500 text-lg py-12">{error}</p>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product._id} product={product} /> // Use _id from MongoDB
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-lg py-12">
                No products found.
              </p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
