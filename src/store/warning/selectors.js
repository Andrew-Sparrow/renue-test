import { NameSpace } from '../root-reducer';

export const getWarning = (state) => state[NameSpace.WARNING].warning;
