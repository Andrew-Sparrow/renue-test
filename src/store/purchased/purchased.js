import { createReducer } from '@reduxjs/toolkit';

import {
  addToPurchased,
} from '../actions';

const initialState = {
  purchased: {},
};

function updatePurchasedProducts(purchasedProducts, id) {
  const newPurchasedProducts = { ...purchasedProducts };

  if (Object.keys(purchasedProducts).includes(id)) {

    const newAmount = newPurchasedProducts[id].amount + 1;
    newPurchasedProducts[id].amount = newAmount;

    return newPurchasedProducts;
  } else {
    return newPurchasedProducts;
  }
}

const purchased = createReducer(initialState, (builder) => {
  builder
    .addCase(addToPurchased, (state, action) => {
      state.purchased = updatePurchasedProducts(state.purchased, action.payload );
    })
});

export { purchased };
