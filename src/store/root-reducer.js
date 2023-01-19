import { combineReducers } from 'redux';
import { balance } from './balance/balance';
import { rest } from './rest/rest.js';


export const NameSpace = {
  BALANCE: 'BALANCE',
  REST: 'REST',
  GOODS: 'GOODS',
};

export default combineReducers({
  [NameSpace.BALANCE]: balance,
  [NameSpace.REST]: rest,
});
