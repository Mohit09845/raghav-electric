import mongoose  from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true, 
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

export default Product;
