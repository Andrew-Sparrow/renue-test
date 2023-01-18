import React, { useState } from 'react';
import { acceptedBanknotes } from '../../util/const.ts';
import { Banknote } from '../banknote/banknote';


export function Main() {

  return (
    <main className='main'>
      <h1 className='main__title'>Vending Machine</h1>
      <div className='wrapper'>
        <div className='money'>
          <p>Select banknotes to deposit into the machine</p>
          <ul className='banknotes'>
            {acceptedBanknotes.map((denomination) => <Banknote denomination={denomination} />)}
          </ul>
          <button className='money__button'>Deposit money</button>
          <button className='money__button'>Get change</button>
        </div>
        <div className='deposit'>
          <p>Amount of money deposited<span>{}</span></p>
          <p>The amount of money left<span>{}</span></p>
          <ul>
            List of goods
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h2>Purchased goods</h2>
          <ul>
            List of bought goods
          </ul>
        </div>
        <div>
          <h2>Your change</h2>
          <button>Get change</button>
          <ul>
            List of change
          </ul>
        </div>
      </div>
    </main>
  );
}
