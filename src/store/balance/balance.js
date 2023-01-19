import { createReducer } from '@reduxjs/toolkit';

import {
  addToBalance,
} from '../actions';


const initialState = {
  balance: 0,
};

const balance = createReducer(initialState, (builder) => {
  builder
    .addCase(addToBalance, (state, action) => {
      state.balance = action.payload;
    })
});

export { balance };
