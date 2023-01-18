import React from 'react';

export function Banknote({denomination}) {
  return (
    <div className='banknote'>
      <p className="denomination">{denomination}</p><span> X </span>
      <input className='banknote__input' type="number" />
    </div>
  );
}
