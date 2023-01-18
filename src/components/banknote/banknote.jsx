import React, { useState } from 'react';

const invalidChars = [
  "-",
  "+",
  "e",
];

export function Banknote({ denomination }) {
  const [value, setValue] = useState(0);
  const [errorText, setErrorText] = useState('');

  function handleChangeInput(evt) {
    const value = evt.target.value;

    if (isNaN(value)) {
      setErrorText('Enter only number');
      setValue(0);
    } else {
      setValue(+evt.target.value);
      setErrorText('');
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
          value={value}
        ></input>
        <p className="banknote__error">{errorText}</p>
      </div>
    </div>
  );
}
