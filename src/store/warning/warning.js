import { createReducer } from '@reduxjs/toolkit';

import { addToPurchased } from '../actions';


const initialState = {
  warning: '',
};



const warning = createReducer(initialState, (builder) => {
  builder
    .addCase(addToPurchased, (state, action) => {
      state.warning = action.payload;
    })
});

export { warning };
