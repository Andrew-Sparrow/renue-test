import React from 'react';
import ChangeList from '../change-list/change-list';
import { PurchasedProducts } from '../purchased-products/purchased-products';

export function Purchased(props) {
  return (
    <div className="wrapper">
      <div className='purchased'>
        <h4>Purchased goods</h4>
        <PurchasedProducts />
      </div>
      <div className='change'>
        <button className='button'>Get change</button>
        <h4>Your change</h4>
        <ChangeList />
      </div>
    </div>
  );
}
