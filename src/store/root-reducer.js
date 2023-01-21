import { combineReducers } from 'redux';
import { balance } from './balance/balance';
import { restCash } from './rest-cash/rest-cash.js';
import { purchased } from './purchased/purchased.js';
import { products } from './products/products';
import { warning } from './warning/warning'


export const NameSpace = {
  BALANCE: 'BALANCE',
  REST_CASH: 'REST_CASH',
  GOODS: 'GOODS',
  PURCHASED: 'PURCHASED',
  WARNING: 'WARNING'
};

export default combineReducers({
  [NameSpace.BALANCE]: balance,
  [NameSpace.REST_CASH]: restCash,
  [NameSpace.PURCHASED]: purchased,
  [NameSpace.GOODS]: products,
  [NameSpace.WARNING]: warning,
});
