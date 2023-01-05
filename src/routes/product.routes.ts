import { Router } from 'express';
import ProductController from '../controllers/product.controller';

import { productValidation } from '../middlewares/fieldsValidation';

const router = Router();

const productController = new ProductController();

router.post('/products', productValidation, productController.registerProduct);

router.get('/products', productController.getAllProducts);

export default router;