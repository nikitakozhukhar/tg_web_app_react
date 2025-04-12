import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { IProduct } from '../../interface/Iproduct';
import useTelergam from '../../hooks/useTelergam';
import { useState } from 'react';

const products = [
  {id: '1', title: 'Джинсы', price: 500, description: 'Черного цвета, прямые' },
  {id: '2', title: 'Куртка', price: 500, description: 'Черного цвета, зимняя' },
  {id: '3', title: 'Рубашка', price: 500, description: 'Черно-белая клеткаб приталенная' },
  {id: '4', title: 'Куртка кож.', price: 500, description: 'Черного цвета, осенняя' },
  {id: '5', title: 'Пальто', price: 500, description: 'Серого цвета, ниже колена' },
  {id: '6', title: 'Шапка', price: 500, description: 'Черного цвета, с подкладкой' },
  {id: '7', title: 'Перчатки', price: 500, description: 'Черного цвета, теплые' },
  {id: '8', title: 'Ботинки', price: 500, description: 'Черного цвета, на молнии' },
];

const getTotalPrice = (items: IProduct[] = []) => {
  items.reduce((sum, item) => {
    return sum += item.price;
  }, 0)
}

const ProductList = () => {

  const [addedItems, setAddedItems] = useState<IProduct[]>([]);
  const {tg} = useTelergam();

  const onAdd = (product: IProduct) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id);
    let newItems: IProduct[] = [];

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`
      })
    }
  }

  return (
    <div className={'list'}>
      {products.map((item) => (
        <ProductItem 
          key={item.id}
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      ))}
    </div>
  );
};

export default ProductList;