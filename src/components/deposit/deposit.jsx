import React from 'react';
import { Goods } from '../goods/goods';
import { useSelector } from 'react-redux';
import { getBalance } from '../../store/balance/selectors';


export function Deposit(props) {
  const balance = useSelector(getBalance);

  return (
    <div className='deposit'>
      <p className='deposit__info'>Your Balance</p>
      <p className='deposit__value'>{balance}</p>
      <p className='deposit__info deposit__info--warning'>Warning</p>
      <p className='deposit__value'>{}</p>
      <h4>List of Goods</h4>
      <Goods/>
    </div>
  );
}
