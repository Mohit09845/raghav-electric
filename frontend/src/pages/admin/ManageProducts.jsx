import { useState, useEffect } from 'react';
import axios from 'axios';
import { Image as ImageIcon, X, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL;

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ _id: null, name: '', category: '', price: '' });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/product`);
      setProducts(response.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError('Could not load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentProduct({ _id: null, name: '', category: '', price: '' });
    setImageFile(null);
    setImagePreview('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing && !imageFile) {
      alert("Please upload an image for the new product.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('name', currentProduct.name);
    formData.append('category', currentProduct.category);
    formData.append('price', currentProduct.price);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      if (isEditing) {
        // Update existing product
        await axios.put(`${API_URL}/product/${currentProduct._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        // Add new product
        await axios.post(`${API_URL}/product`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      resetForm();
      fetchProducts(); // Refresh the product list
    } catch (err) {
      console.error('Failed to save product:', err);
      alert('An error occurred while saving the product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const editProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct({ _id: product._id, name: product.name, category: product.category, price: product.price });
    setImagePreview(product.image); // Show current image
    setImageFile(null); // Clear any selected file
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`${API_URL}/product/${id}`);
        fetchProducts(); // Refresh the list
      } catch (err) {
        console.error('Failed to delete product:', err);
        alert('An error occurred while deleting the product.');
      }
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Manage Products</h2>
      
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700">{isEditing ? 'Edit Product' : 'Add New Product'}</h3>
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <input name="name" value={currentProduct.name} onChange={handleInputChange} placeholder="Product Name" className="w-full p-3 border rounded-lg" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="category" value={currentProduct.category} onChange={handleInputChange} placeholder="Category" className="w-full p-3 border rounded-lg" required />
              <input name="price" value={currentProduct.price} onChange={handleInputChange} placeholder="Price (₹)" type="number" className="w-full p-3 border rounded-lg" required />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="mt-1 flex justify-center items-center p-4 border-2 border-dashed rounded-lg h-48 lg:h-full">
              <div className="space-y-1 text-center">
                {imagePreview ? (
                  <div className="relative group">
                    <img src={imagePreview} alt="Preview" className="mx-auto h-24 w-24 object-cover rounded-lg" />
                    <button type="button" onClick={() => { setImageFile(null); setImagePreview(''); }} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"><X size={16} /></button>
                  </div>
                ) : (
                  <>
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <label htmlFor="image-upload" className="cursor-pointer text-sm font-medium text-indigo-600">
                      <span>Upload an image</span>
                      <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex justify-center gap-4 mt-4">
            {isEditing && <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-6 py-2 rounded-lg">Cancel</button>}
            <button type="submit" disabled={isSubmitting} className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center justify-center disabled:bg-indigo-400">
              {isSubmitting ? <Loader2 className="animate-spin" /> : (isEditing ? 'Update Product' : 'Add Product')}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Product List</h3>
        {loading ? <div className="text-center"><Loader2 className="animate-spin inline-block" /></div> : 
         error ? <p className="text-red-500 text-center">{error}</p> :
        <div className="space-y-4">
          {products.map(product => (
            <div key={product._id} className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 w-full">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-grow">
                  <p className="font-bold">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.category} - ₹{product.price}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0 sm:ml-4 justify-end w-full sm:w-auto">
                <button onClick={() => editProduct(product)} className="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm w-1/2 sm:w-auto">Edit</button>
                <button onClick={() => deleteProduct(product._id)} className="bg-red-500 text-white px-4 py-2 rounded-md text-sm w-1/2 sm:w-auto">Delete</button>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default ManageProducts;
