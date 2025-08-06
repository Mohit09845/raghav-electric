import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controller/productController.js';
import { upload } from '../middleware/multer.js';

const router = express.Router();

router.get('/', getProducts);

router.post('/', upload.single('image'), createProduct);
router.put('/:id', upload.single('image'), updateProduct);

router.delete('/:id', deleteProduct);

export default router;