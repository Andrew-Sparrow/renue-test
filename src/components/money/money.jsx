import React from 'react';
import { acceptedBanknotes } from '../../util/const.ts';
import { Banknote } from '../banknote/banknote';

export function Money(props) {
  return (
    <div className='money'>
      <p>Select banknotes to deposit into the machine</p>
      <ul className='banknotes'>
        {acceptedBanknotes.map((denomination) => <Banknote denomination={denomination} />)}
      </ul>
      <button className='button'>Deposit money</button>
      <button className='button'>Get change/return money</button>
    </div>
  );
}
