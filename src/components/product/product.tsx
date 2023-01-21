import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { excludeFromProducts, addToPurchased, addWarning } from '../../store/actions';
import { getBalance } from '../../store/balance/selectors';


export function Product({ id, product }) {
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);
  const isBalanceEnoughToBuy = balance > product.price;

  function onClickProductHandle() {
    if (!isBalanceEnoughToBuy) {
      dispatch(addWarning('Please, replenish the balance'));
    }
    if (isBalanceEnoughToBuy && product.amount > 0) {
      dispatch(excludeFromProducts(id));
      dispatch(addToPurchased({ [id]: product }));
      dispatch(addWarning(''));
    }
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
