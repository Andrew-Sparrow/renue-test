import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToChange } from '../../store/actions';
import ChangeList from '../change-list/change-list';
import { PurchasedProducts } from '../purchased-products/purchased-products';

export function Purchased(props) {
  const dispatch = useDispatch();

  function addToChangeMoney() {
    dispatch(addToChange());
  }

  return (
    <div className="wrapper">
      <div className='purchased'>
        <h4>Purchased goods</h4>
        <PurchasedProducts />
      </div>
      <div className='change'>
        <button className='button' onClick={addToChangeMoney}>Get Change / Return Money</button>
        <h4>Your change</h4>
        <p className="change__amount"></p>
        <ChangeList />
      </div>
    </div>
  );
}
