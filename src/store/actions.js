import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_TO_BALANCE: 'balance/add_to_balance',
};

export const addToBalance = createAction(
  ActionType.ADD_TO_BALANCE,
  (balance) => ({payload: balance}),
);
