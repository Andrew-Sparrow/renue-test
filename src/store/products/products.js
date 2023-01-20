import { createReducer } from '@reduxjs/toolkit';

import {
  excludeFromProducts,
} from '../actions';

import { goods } from '../db/goods.ts';

const initialState = {
  products: goods,
};

function productWithNewAmount(product) {
  if (product.amount === 0) {
    return { ...product, amount: 0 };
  }
  return { ...product, amount: product.amount - 1 }
}

function changeProductAmount(products, payload) {
  const clonedProducts = { ...products };

  const newProducts = Object.values(clonedProducts).map(
    (product) => product.id === payload ? productWithNewAmount(product) : product
  );

  return newProducts;
}

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(excludeFromProducts, (state, action) => {
      state.products = changeProductAmount(state.products, action.payload);
    })
});

export { products };
