import { createReducer } from '@reduxjs/toolkit';

import {
  addToBalance,
  extractFromBalance
} from '../actions';

const initialState = {
  balance: 0,
};

const balance = createReducer(initialState, (builder) => {
  builder
    .addCase(addToBalance, (state, action) => {
      state.balance = state.balance + action.payload;
    })
    .addCase(extractFromBalance, (state, action) => {
      state.balance = state.balance - action.payload;
    })
});

export { balance };
