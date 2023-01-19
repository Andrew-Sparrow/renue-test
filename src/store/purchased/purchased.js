import { createReducer } from '@reduxjs/toolkit';

import {
  addToPurchased,
} from '../actions';

const initialState = {
  purchased: [],
};

const purchased = createReducer(initialState, (builder) => {
  builder
    .addCase(addToPurchased, (state, action) => {
      state.purchased = state.purchased.concat(action.payload);
    })
});

export { purchased };
