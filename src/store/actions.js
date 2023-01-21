import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_TO_BALANCE: 'balance/add_to_balance',
  ADD_TO_REST: 'rest/cash_in_rest',
  ADD_TO_PURCHASED: 'purchased/add_to_purchased',
  EXCLUDE_FROM_PRODUCTS: 'products/exclude_from_products',
  ADD_WARNING_MESSAGE: 'warning/add_warning_message',
};

export const addToBalance = createAction(
  ActionType.ADD_TO_BALANCE,
  (balance) => ({payload: balance}),
);

export const addToRest = createAction(
  ActionType.ADD_TO_REST,
  (rest) => ({payload: rest}),
);

export const addToPurchased = createAction(
  ActionType.ADD_TO_REST,
  (id) => ({payload: id}),
);

export const excludeFromProducts = createAction(
  ActionType.EXCLUDE_FROM_PRODUCTS,
  (product) => ({ payload: product }),
);

export const addWarning = createAction(
  ActionType.ADD_WARNING_MESSAGE,
  (warningMessage) => ({ payload: warningMessage }),
);
