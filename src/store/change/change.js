import { createReducer } from '@reduxjs/toolkit';

import { changeList } from '../db/change-list.ts';

import {
  addToChange
} from '../actions';

const initialState = {
  change: changeList,
};

const change = createReducer(initialState, (builder) => {
  builder
    .addCase(addToChange, (state, action) => {
      state.change = state.change + action.payload;
    })
});

export { change };
