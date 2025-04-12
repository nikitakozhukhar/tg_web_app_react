import './ProductItem.css';
import Button from '../Button/Button';
import { ProductItemProps } from '../../interface/IProductItemProps';

const ProductItem = ({product, className, onAdd}: ProductItemProps) => {

  const onAddHandler =() => {
    onAdd(product)
  }

  return (
    <div className={'product ' + className}>
      <div className={'img'}/>
      <div className={'title'}>{product.title}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>Стоимость: <b>{product.price}</b></span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}></Button>
    </div>
  );
};

export default ProductItem;