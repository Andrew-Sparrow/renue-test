import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Banknote } from '../banknote/banknote.tsx';
import {
  addToBalance,
  addWarning,
  addToRest
} from '../../store/actions.js';

import { ENTRY } from '../../util/const.ts';


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

    if (currentSum > 0) {
      dispatch(addToBalance(currentSum));
      dispatch(addWarning(''));
      dispatch(addToRest(givenBanknotes));
    }
  }

  function onGivenCashChange(givenCash) {
    setGivenBanknotes({ ...givenBanknotes, [givenCash.nominal]: givenCash.amount })
  }

  return (
    <div className='money'>
      <p>Select banknotes to add to balance</p>
      <ul className='banknotes'>
        {Object.entries(givenMoney).map((banknoteEntry) => (
          <Banknote
            denomination={banknoteEntry[ENTRY.KEY_INDEX]}
            key={banknoteEntry[ENTRY.KEY_INDEX]}
            onGivenCashChange={onGivenCashChange}
          />
        ))}
      </ul>
      <button className='button' onClick={handleClickButton}>Add to Balance</button>
      <button className='button'>Get change/return money</button>
    </div>
  );
}
