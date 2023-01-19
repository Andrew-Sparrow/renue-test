import React from 'react';
import { useDispatch } from 'react-redux';

import { acceptedBanknotes } from '../../util/const.ts';
import { Banknote } from '../banknote/banknote';
import { addToBalance } from '../../store/actions.js';


export function Money(props) {
  const dispatch = useDispatch();


  function handleClickButton() {
    dispatch(addToBalance(10));
  }

  return (
    <div className='money'>
      <p>Select banknotes to deposit into the machine</p>
      <ul className='banknotes'>
        {acceptedBanknotes.map((denomination) => (
          <Banknote denomination={denomination} key={denomination} />
        ))}
      </ul>
      <button className='button' onClick={handleClickButton}>Add to Balance</button>
      <button className='button'>Get change/return money</button>
    </div>
  );
}
