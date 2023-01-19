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
    console.log('includes')
    const itemWithNewAmount = {...product, amount: product.amount + 1};
    return newPurchasedProducts.map((item) => item.id === product.id ? itemWithNewAmount : item)
  } else {
    return newPurchasedProducts = newPurchasedProducts.concat(product);
  }
}

const purchased = createReducer(initialState, (builder) => {
  builder
    .addCase(addToPurchased, (state, action) => {
      console.log(action.payload);
      state.purchased = updatePurchasedProducts(state.purchased, action.payload);
    })
});

export { purchased };
