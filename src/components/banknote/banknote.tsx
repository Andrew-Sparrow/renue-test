import React, { useState } from 'react';
import { Note } from '../money/money';


export function Banknote({ denomination, onGivenCashChange }) {
  const note: Note = {
    nominal: denomination,
    amount: 0
  }

  const [banknoteAmount, setBanknoteAmount] = useState(note);
  const [errorText, setErrorText] = useState('');

  function handleChangeInput(evt) {
    const value = evt.target.value;

    if (isNaN(value)) {
      setErrorText('Enter only number');
      setBanknoteAmount({...note, amount: 0});
    } else {
      const newGivenBanknoteAmount = { ...note, amount: +evt.target.value };
      setBanknoteAmount(newGivenBanknoteAmount);
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
          value={banknoteAmount.amount}
        ></input>
        <p className="banknote__error">{errorText}</p>
      </div>
    </div>
  );
}
