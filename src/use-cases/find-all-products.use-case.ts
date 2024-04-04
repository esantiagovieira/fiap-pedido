import { ProductRepositoryAdapter } from 'src/gateways/product/product.repository';
import { IProductRepositoryPort } from 'src/ports/product.repository.port';

export class FindAllProductsUseCase {
  constructor(private productRepository: ProductRepositoryAdapter) {}

  execute() {
    return this.productRepository.findAll();
  }

  static executar(repository: IProductRepositoryPort) {
    return repository.findAll();
  }
}
