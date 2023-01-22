import React from 'react';
import { useSelector } from 'react-redux';

import { Change } from '../change/change';
import { getChange } from '../../store/change/selectors';
import { ENTRY } from '../../util/const.ts';


function ChangeList(props) {
  const change = useSelector(getChange);

  return (
    <ul>
      {Object.entries(change).map((changeEntry) => (
        <Change
          denomination={changeEntry[ENTRY.KEY_INDEX]}
          restAmount={changeEntry[ENTRY.VALUE_INDEX].restAmount}
          key={changeEntry[ENTRY.KEY_INDEX]}
        />)
      )}
    </ul>
  );
}

export default ChangeList;
