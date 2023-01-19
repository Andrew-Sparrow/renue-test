import { combineReducers } from 'redux';
import { balance } from './balance/balance';
import { restCash } from './rest-cash/rest-cash.js';
import { purchased } from './purchased/purchased.js';


export const NameSpace = {
  BALANCE: 'BALANCE',
  REST_CASH: 'REST_CASH',
  GOODS: 'GOODS',
  PURCHASED: 'PURCHASED'
};

export default combineReducers({
  [NameSpace.BALANCE]: balance,
  [NameSpace.REST_CASH]: restCash,
  [NameSpace.PURCHASED]: purchased,
});
