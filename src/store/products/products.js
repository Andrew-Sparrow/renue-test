import { createReducer } from '@reduxjs/toolkit';

import {
  excludeFromProducts,
} from '../actions';

const initialState = {
  products: [],
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(excludeFromProducts, (state, action) => {
      state.products = state.products.filter((id) => id !== action.payload);
    })
});

export { products };
