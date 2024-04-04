import { IProduct } from 'src/domain/pedido/product.domain';
import { ProductRepositoryAdapter } from './product.repository';
import { Controller, Get } from '@nestjs/common';
import { FindAllProductsUseCase } from 'src/use-cases/find-all-products.use-case';

@Controller()
export class ProductController {
  constructor(private readonly productRepository: ProductRepositoryAdapter) {}

  @Get()
  async findAllProducts(): Promise<Array<IProduct>> {
    return FindAllProductsUseCase.executar(this.productRepository);
  }
}
