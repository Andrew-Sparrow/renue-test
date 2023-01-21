import React from 'react';
import { Money } from '../money/money.tsx';
import { Deposit } from '../deposit/deposit.jsx';
import { Purchased } from '../purchased/purchased.jsx';


export function Main() {

  return (
    <main className='main'>
      <h1 className='main__title'>Vending Machine</h1>
      <a
        className="main__link"
        target="_blank"
        href='https://github.com/Andrew-Sparrow/renue-test'
        alt='Link to GitHub'
        rel="noopener noreferrer"
      >Project on GitHub</a>
      <div className='wrapper'>
        <Deposit />
        <Money />
      </div>
      <Purchased />
    </main>
  );
}
