import React from 'react';

interface ProductProps {
  title: string;
  type: string;
  price: number;
  amount: number;
  isProductBought?: boolean;
}

export function Product({ title, type, price, amount, isProductBought }: ProductProps) {
  function onClickProductHandle() {
    console.log('click')
  }

  return (
    <li className={`product ${ isProductBought ?? 'product--bought' }`} onClick={onClickProductHandle}>
      <p className="product__type">{type}</p>
      <div className="product__wrapper">
        <p className="product__title">{title}</p>
        <p className="product__price">{price} <span>₽</span></p>
        <p className="product__amount">{amount}</p>
      </div>
    </li>
  );
}
