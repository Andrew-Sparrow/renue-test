import { NameSpace } from '../root-reducer';

export const getPurchasedProducts = (state) => state[NameSpace.PURCHASED].purchased;