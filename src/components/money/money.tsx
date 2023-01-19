import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { acceptedBanknotes } from '../../util/const.ts';
import { Banknote } from '../banknote/banknote.tsx';
import { addToBalance } from '../../store/actions.js';
import { AllowedChangeMoney } from '../../store/db/restChangeCash.js';

export type Note = {
  nominal: AllowedChangeMoney,
  amount: number
};

const givenMoney: Note[] = [
  {
    nominal: 50,
    amount: 0
  },
  {
    nominal: 100,
    amount: 0
  },
  {
    nominal: 500,
    amount: 0
  },
  {
    nominal: 1000,
    amount: 0
  },
];



export function Money(props) {
  const dispatch = useDispatch();

  const [givenCash, setGivenCash] = useState(givenMoney);


  function handleClickButton() {
    dispatch(addToBalance(10));
  }

  function onGivenCashChange(givenCash) {
    console.log(givenCash);
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
