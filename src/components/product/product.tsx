import React from 'react';
import { useDispatch } from 'react-redux';

import { excludeFromProducts, addToPurchased } from '../../store/actions';


export interface ProductProps {
  id: string;
  title: string;
  type: string;
  price: number;
  amount: number;
  isProductBought?: boolean;
}

let boughtProduct = {
  id: '',
  type: '',
  price: 0,
  title: '',
  amount: 1,
};

export function Product({ id, title, type, price, amount }: ProductProps) {
  const dispatch = useDispatch();

  boughtProduct.id = id;
  boughtProduct.title = title;
  boughtProduct.type = type;

  function onClickProductHandle() {
    dispatch(excludeFromProducts(id));
    dispatch(addToPurchased(boughtProduct));
  }

  return (
    <li className="product" onClick={onClickProductHandle}>
      <p className="product__type">{type}</p>
      <div className="product__wrapper">
        <p className="product__title">{title}</p>
        <p className="product__price">{price} <span>₽</span></p>
        <p className="product__amount">{amount}</p>
      </div>
    </li>
  );
}
