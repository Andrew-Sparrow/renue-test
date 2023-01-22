import { createReducer } from '@reduxjs/toolkit';
import { restOfCash } from '../db/restChangeCash.ts';

import {
  addToRest,
} from '../actions.js';
import { ENTRY } from '../../util/const.ts';


const initialState = {
  rest: restOfCash,
};

function addToRestOFCash(givenCash, oldRestOFCash) {
  const clonedRestOfCash = JSON.parse(JSON.stringify(oldRestOFCash));

  Object.entries(givenCash).forEach(
    (cashEntry) => {
      return clonedRestOfCash[cashEntry[ENTRY.KEY_INDEX]].restAmount = clonedRestOfCash[cashEntry[ENTRY.KEY_INDEX]].restAmount + cashEntry[ENTRY.VALUE_INDEX];
    }
  );

  return clonedRestOfCash;
}

const restCash = createReducer(initialState, (builder) => {
  builder
    .addCase(addToRest, (state, action) => {
      state.rest = addToRestOFCash(action.payload, state.rest);
    })
});

export { restCash };
