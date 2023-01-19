import React, { useState } from 'react';
import { Money } from '../money/money.tsx';
import { Deposit } from '../deposit/deposit.jsx';
import { Purchased } from '../purchased/purchased.jsx';


export function Main() {

  return (
    <main className='main'>
      <h1 className='main__title'>Vending Machine</h1>
      <div className='wrapper'>
        <Deposit />
        <Money />
      </div>
      <Purchased />
    </main>
  );
}
