import { NameSpace } from '../root-reducer';

export const getProducts = (state) => state[NameSpace.GOODS].goods;