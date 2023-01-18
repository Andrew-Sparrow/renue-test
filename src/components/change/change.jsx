import React from 'react';


export function Change({ denomination, restAmount }) {
  return (
    <div className='banknote'>
      <p className="denomination">{denomination}</p><span> X </span>
      <p className='banknote__rest'>{restAmount}</p>
    </div>
  );
}
