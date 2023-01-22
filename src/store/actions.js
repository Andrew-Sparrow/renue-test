import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_TO_BALANCE: 'balance/add_to_balance',
  EXTRACT_FROM_BALANCE: 'balance/extract_from_balance',
  ADD_TO_REST_CASH: 'rest/add_to_rest_cash',
  ADD_TO_PURCHASED: 'purchased/add_to_purchased',
  EXCLUDE_FROM_PRODUCTS: 'products/exclude_from_products',
  ADD_WARNING_MESSAGE: 'warning/add_warning_message',
  ADD_TO_CHANGE: 'change/add_to_change',
};

export const addToBalance = createAction(
  ActionType.ADD_TO_BALANCE,
  (number) => ({payload: number}),
);

export const extractFromBalance = createAction(
  ActionType.EXTRACT_FROM_BALANCE,
  (number) => ({payload: number}),
);

export const addToRest = createAction(
  ActionType.ADD_TO_REST_CASH,
  (rest) => ({payload: rest}),
);

export const addToPurchased = createAction(
  ActionType.ADD_TO_PURCHASED,
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

export const addToChange = createAction(
  ActionType.ADD_TO_CHANGE,
  (change) => ({ payload: change }),
);

