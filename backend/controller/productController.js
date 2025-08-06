import Product from '../model/Product.js';
import { uploadOnCloudinary, cloudinary } from '../util/cloudinary.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, category, price } = req.body;

  if (!name || !category || !price) {
    return res.status(400).json({ message: 'Please provide all required text fields' });
  }

  const imageBuffer = req.file?.buffer;
  if (!imageBuffer) {
    return res.status(400).json({ message: 'Product image is required' });
  }

  try {
    const image = await uploadOnCloudinary(imageBuffer);
    if (!image) {
      return res.status(500).json({ message: 'Failed to upload image to Cloudinary' });
    }

    const newProduct = new Product({ 
      name, 
      category, 
      price, 
      image: image.secure_url 
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


export const updateProduct = async (req, res) => {
  const { name, category, price } = req.body;
  let newImageUrl = null;

  try {
    if (req.file) {
      const imageBuffer = req.file.buffer;
      const image = await uploadOnCloudinary(imageBuffer);
      if (!image) {
        return res.status(500).json({ message: 'Failed to upload new image' });
      }
      newImageUrl = image.secure_url;
    }

    const updateData = { name, category, price };
    if (newImageUrl) {
      updateData.image = newImageUrl;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const imageUrl = product.image;
    
    const urlParts = imageUrl.split('/');
    const publicIdWithExtension = urlParts[urlParts.length - 1];
    const publicId = publicIdWithExtension.split('.')[0];

    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
