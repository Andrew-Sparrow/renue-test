import { createReducer } from '@reduxjs/toolkit';
import { restOfCash } from '../db/restChangeCash.ts';

import {
  addToBalance,
} from '../actions.js';


const initialState = {
  rest: restOfCash,
};

const restCash = createReducer(initialState, (builder) => {
  builder
    .addCase(addToBalance, (state, action) => {
      state.rest = state.rest;
    })
});

export { restCash };
