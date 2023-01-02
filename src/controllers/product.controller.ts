import { Request, Response } from 'express';
import ProductService from '../services/product.service';
// import Product from '../interfaces/product.interface';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public registerProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productRegistered = await this.productService.registerProduct(product);

    return res.status(201).json(productRegistered);
  };
}