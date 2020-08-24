import { Product } from './Product.model';

export interface Customer {
  id: string;
  name: string;
  email: string;
  purchasedProducts: Product[];
}
