import { NameSpace } from '../root-reducer';

export const getBalance = (state) => state[NameSpace.BALANCE].balance;