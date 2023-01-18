import React from 'react';

export function Deposit(props) {
  return (
    <div className='deposit'>
      <p className='deposit__info'>Amount of money deposited<span>{}</span></p>
      <p className='deposit__info'>The amount of money left<span>{}</span></p>
      <p className='deposit__info deposit__info--warning'>Warning<span>{}</span></p>
      <ul className='goods'>
        List of goods
      </ul>
    </div>
  );
}
