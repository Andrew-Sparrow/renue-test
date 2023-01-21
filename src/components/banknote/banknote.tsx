import React, { useState } from 'react';
import { Note } from '../money/money';


export function Banknote({ denomination, onGivenCashChange }) {
  const note: Note = {
    nominal: denomination,
    amount: 0
  }

  const [banknoteAmount, setBanknoteAmount] = useState(0);
  const [errorText, setErrorText] = useState('');

  function handleChangeInput(evt) {
    let value = evt.target.value;

    if (isNaN(value)) {
      setErrorText('Enter only number');
      setBanknoteAmount(0);
    } else {
      value = +evt.target.value
      const newGivenBanknoteAmount = { ...note, amount: value };
      setBanknoteAmount(value);
      setErrorText('');
      onGivenCashChange(newGivenBanknoteAmount);
    }
  }

  return (
    <div className='banknote'>
      <p className="denomination">{denomination}</p><span> X </span>
      <div>
        <input
          className='banknote__input'
          type="text"
          onChange={handleChangeInput}
          value={banknoteAmount}
        ></input>
        <p className="banknote__error">{errorText}</p>
      </div>
    </div>
  );
}
