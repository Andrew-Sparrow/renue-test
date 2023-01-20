import { createReducer } from '@reduxjs/toolkit';

import {
  excludeFromProducts,
} from '../actions';

import { goods } from '../db/goods.ts';

const initialState = {
  products: goods,
};

function changeProductAmount(products, id) {
  const newProducts = {...products};

  const newAmount = newProducts[id].amount > 0 ? newProducts[id].amount - 1 : 0;
  newProducts[id].amount = newAmount;

  return newProducts;
}

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(excludeFromProducts, (state, action) => {
      state.products = changeProductAmount(state.products, action.payload);
    })
});

export { products};
