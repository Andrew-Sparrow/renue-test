import { createReducer } from '@reduxjs/toolkit';

import { addToPurchased } from '../actions';
import { ENTRY } from '../../util/const.ts';


const initialState = {
  purchased: {},
};

const FIRST_ELEMENT = 0;

function updatePurchasedProducts(purchasedProducts, product) {
  const clonedPurchasedProducts = JSON.parse(JSON.stringify(purchasedProducts));
  const clonedProduct = JSON.parse(JSON.stringify(product));

  const newPurchasedProductEntry = Object.entries(clonedProduct)[FIRST_ELEMENT];
  const productId = newPurchasedProductEntry[ENTRY.KEY_INDEX];
  const newProduct = newPurchasedProductEntry[ENTRY.VALUE_INDEX]

  if (Object.keys(purchasedProducts).includes(productId)) {

    const newAmount = clonedPurchasedProducts[productId].amount + 1;
    clonedPurchasedProducts[productId].amount = newAmount;

    return clonedPurchasedProducts;
  } else {
    newProduct.amount = 1;
    return { ...clonedPurchasedProducts, [productId]: newProduct };
  }
}

const purchased = createReducer(initialState, (builder) => {
  builder
    .addCase(addToPurchased, (state, action) => {
      state.purchased = updatePurchasedProducts(state.purchased, action.payload );
    })
});

export { purchased };
