import { combineReducers } from 'redux';
import { balance } from './balance/balance';


export const NameSpace = {
  BALANCE: 'BALANCE',
  CHANGE: 'CHANGE',
  GOODS: 'GOODS',
};

export default combineReducers({
  [NameSpace.BALANCE]: balance,
});
