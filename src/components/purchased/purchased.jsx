import React from 'react';
import PurchasedList from '../purchased-list/purchased-list';
import ChangeList from '../change-list/change-list';

export function Purchased(props) {
  return (
    <div className="wrapper">
    <div className='purchased'>
      <div>
        <h4>Purchased goods</h4>
        <ul>
          List of bought goods
        </ul>
      </div>
      <div>
        <button className='button'>Get change</button>
        <h4>Your change</h4>
        <ChangeList />
      </div>
      </div>
    </div>
  );
}
