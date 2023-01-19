import { createReducer } from '@reduxjs/toolkit';
import { restOfCash } from '../db/restChangeCash.ts';

import {
  addToBalance,
} from '../actions';


const initialState = {
  rest: restOfCash,
};

const rest = createReducer(initialState, (builder) => {
  builder
    .addCase(addToBalance, (state, action) => {
      state.rest = state.rest;
    })
});

export { rest };
