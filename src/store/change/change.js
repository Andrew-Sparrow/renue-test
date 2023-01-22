import { createReducer } from '@reduxjs/toolkit';

import { changeList } from '../db/change-list.ts';

import {
  addToChange
} from '../actions';

const initialState = {
  change: changeList,
};

// function to calculate change money
function calculateChange(restOfCashInStore, currentBalance) {
  let changeCash;
  // console.log(currentBalance);
  // console.log(JSON.parse(JSON.stringify(state)));


  Object.entries(restOfCashInStore).reverse();

  return changeCash;
}

const change = createReducer(initialState, (builder) => {
  builder
    .addCase(addToChange, (state, action) => {
      calculateChange(state.change, action.payload);
      state.change = state.change;
    })
});

export { change };
