import React from 'react';
import { Goods } from '../goods/goods';

export function Deposit(props) {
  return (
    <div className='deposit'>
      <p className='deposit__info'>Your Balance</p>
      <p className='deposit__value'>{}</p>
      <p className='deposit__info deposit__info--warning'>Warning</p>
      <p className='deposit__value'>{}</p>
      <h4>List of Goods</h4>
      <Goods/>
    </div>
  );
}
