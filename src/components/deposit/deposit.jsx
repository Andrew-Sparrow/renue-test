import React from 'react';
import { Goods } from '../goods/goods';

export function Deposit(props) {
  return (
    <div className='deposit'>
      <p className='deposit__info'>Amount of money deposited</p>
      <p className='deposit__value'>{}</p>
      <p className='deposit__info'>The amount of money left</p>
      <p className='deposit__value'>{}</p>
      <p className='deposit__info deposit__info--warning'>Warning</p>
      <p className='deposit__value'>{}</p>
      <Goods/>
    </div>
  );
}
