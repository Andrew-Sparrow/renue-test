import { createReducer } from '@reduxjs/toolkit';

import {
  excludeFromProducts,
} from '../actions';

import { goods } from '../db/goods.ts';

const initialState = {
  products: goods,
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(excludeFromProducts, (state, action) => {
      state.products = state.products.filter((id) => id !== action.payload);
    })
});

export { products };
