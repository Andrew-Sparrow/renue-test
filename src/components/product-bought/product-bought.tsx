import React from 'react';

import { ProductProps } from '../product/product';


export function ProductBought({ id, title, type, price, amount }: ProductProps) {

  return (
    <li className="product product--bought" >
      <p className="product__type">{type}</p>
      <div className="product__wrapper">
        <p className="product__title">{title}</p>
        <p className="product__price">{price} <span>₽</span></p>
        <p className="product__amount">{amount}</p>
      </div>
    </li>
  );
}
