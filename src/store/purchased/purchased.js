import { createReducer } from '@reduxjs/toolkit';

import {
  addToPurchased,
} from '../actions';

const initialState = {
  purchased: [],
};

function updatePurchasedProducts(purchasedProducts, product) {
  let newPurchasedProducts = [...purchasedProducts];

  if (newPurchasedProducts.some((item) => item.id === product.id)) {
    if (product.amount === 0) {
      return newPurchasedProducts;
    }
    const itemWithNewAmount = { ...product, amount: purchasedProducts.find((item) => item.id === product.id).amount + 1 };
    return newPurchasedProducts.map((item) => item.id === product.id ? itemWithNewAmount : item)
  } else {
    return newPurchasedProducts = newPurchasedProducts.concat({ ...product, amount: 1});
  }
}

const purchased = createReducer(initialState, (builder) => {
  builder
    .addCase(addToPurchased, (state, action) => {
      state.purchased = updatePurchasedProducts(state.purchased, action.payload);
    })
});

export { purchased };
