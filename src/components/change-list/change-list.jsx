import React from 'react';
import { Change } from '../change/change';

let restOfCash = [
  {
    banknote: 1,
    restAmount: 50
  },
  {
    banknote: 5,
    restAmount: 150
  },
  {
    banknote: 10,
    restAmount: 11
  }
];

function ChangeList(props) {
  return (
    <ul>
      {restOfCash.map((change) => (
        <Change denomination={change.banknote} restAmount={change.restAmount} />)
      )}
    </ul>
  );
}

export default ChangeList;
