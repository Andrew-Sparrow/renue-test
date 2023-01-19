import React from 'react';
import { useDispatch } from 'react-redux';

import { excludeFromProducts } from '../../store/actions';


export interface ProductProps {
  id: string;
  title: string;
  type: string;
  price: number;
  amount: number;
  isProductBought?: boolean;
}

export function Product({ id, title, type, price, amount }: ProductProps) {
  const dispatch = useDispatch();


  function onClickProductHandle() {
    console.log(id);
    dispatch(excludeFromProducts(id))
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