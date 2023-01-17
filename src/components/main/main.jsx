import React, { useState } from 'react';


export function Main() {

  return (
    <main className="">
      <h1>Vending Machine</h1>
      <p>Amount of money deposited<span>{}</span></p>
      <p>The amount of money left<span>{}</span></p>
      <>
        <>
          <p>Your available banknotes </p>
          <ul>
            List of banknotes
          </ul>
          <button>Deposit money</button>
          <button>Get change</button>
        </>
        <>
          <p>Amount of money deposited</p>
          <ul>
            List of goods
          </ul>
        </>
      </>
      <>
        <>
          <h2>Purchased goods</h2>
          <ul>
            List of bought goods
          </ul>
        </>
        <>
          <h2>Your change</h2>
          <button>Get change</button>
          <ul>
            List of change
          </ul>
        </>
      </>
    </main>
  );
}
