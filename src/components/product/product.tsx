import React from 'react';
import { useDispatch } from 'react-redux';

import { excludeFromProducts, addToPurchased } from '../../store/actions';


export function Product({id, product}) {
  const dispatch = useDispatch();

  function onClickProductHandle() {
    dispatch(excludeFromProducts(id));
    // dispatch(addToPurchased(product));
  }

  return (
    <li className="product" onClick={onClickProductHandle}>
      <p className="product__type">{product.type}</p>
      <div className="product__wrapper">
        <p className="product__title">{product.title}</p>
        <p className="product__price">{product.price} <span>₽</span></p>
        <p className="product__amount">{product.amount}</p>
      </div>
    </li>
  );
}
