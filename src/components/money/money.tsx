import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { acceptedBanknotes } from '../../util/const.ts';
import { Banknote } from '../banknote/banknote.tsx';
import { addToBalance, addWarning } from '../../store/actions.js';


const givenMoney = {
  50: 0,
  100: 0,
  500: 0,
  1000: 0
};

function calculateBanknotesSum(banknotes) {
  let keys = Object.keys(banknotes);

  const result = keys.reduce((sum, current) => sum + (+current * banknotes[current]), 0);
  return result;
}


export function Money(props) {
  const dispatch = useDispatch();

  const [givenBanknotes, setGivenBanknotes] = useState(givenMoney);

  function handleClickButton() {
    const currentSum = calculateBanknotesSum(givenBanknotes);

    dispatch(addToBalance(currentSum));
    dispatch(addWarning(''));
  }

  function onGivenCashChange(givenCash) {
    setGivenBanknotes({ ...givenBanknotes, [givenCash.nominal]: givenCash.amount })
  }

  return (
    <div className='money'>
      <p>Select banknotes to deposit into the machine</p>
      <ul className='banknotes'>
        {acceptedBanknotes.map((denomination) => (
          <Banknote
            denomination={denomination} key={denomination}
            onGivenCashChange={onGivenCashChange}
          />
        ))}
      </ul>
      <button className='button' onClick={handleClickButton}>Add to Balance</button>
      <button className='button'>Get change/return money</button>
    </div>
  );
}
