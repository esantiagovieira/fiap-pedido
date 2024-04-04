import { CreateProductCategoryPresenter } from './create-product-category.presenter';

export interface CreateProductPresenter {
  id: string;
  name: string;
  description: string;
  category: CreateProductCategoryPresenter;
  price: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
