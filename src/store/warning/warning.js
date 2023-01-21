import { createReducer } from '@reduxjs/toolkit';

import { addWarning } from '../actions';


const initialState = {
  warning: '',
};


const warning = createReducer(initialState, (builder) => {
  builder
    .addCase(addWarning, (state, action) => {
      state.warning = action.payload;
    })
});

export { warning };
