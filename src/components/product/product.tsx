import React, { AriaAttributes, DOMAttributes } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  excludeFromProducts,
  addToPurchased,
  addWarning,
  extractFromBalance
} from '../../store/actions';

import { getBalance } from '../../store/balance/selectors';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    disabled?: boolean;
  }
};

export function Product({ id, product }) {
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);
  const isBalanceEnoughToBuy = balance >= product.price;
  const isProductAvailableToBuy = product.amount > 0;


  function onClickProductHandle() {
    if (!isBalanceEnoughToBuy) {
      dispatch(addWarning('Please, replenish the balance'));
    }
    if (!isProductAvailableToBuy) {
      dispatch(addWarning('There is no product'));
    }
    if (isBalanceEnoughToBuy && isProductAvailableToBuy) {
      dispatch(excludeFromProducts(id));
      dispatch(addToPurchased({ [id]: product }));
      dispatch(addWarning(''));
      dispatch(extractFromBalance(product.price));
    }
  }

  return (
    <li className="product" onClick={onClickProductHandle} disabled={product.amount === 0} >
      <p className="product__type">{product.type}</p>
      <div className="product__wrapper">
        <p className="product__title">{product.title}</p>
        <p className="product__price">{product.price} <span>₽</span></p>
        <p className="product__amount">{product.amount}</p>
      </div>
    </li>
  );
}
