import { IProduct } from './Iproduct';

export interface ProductItemProps {
  product: IProduct;
  className?: string;
  onAdd: (product: IProduct) => void;
}