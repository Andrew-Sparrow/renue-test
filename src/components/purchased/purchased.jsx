import React from 'react';

export function Purchased(props) {
  return (
    <div className='purchased'>
      <div>
        <h4>Purchased goods</h4>
        <ul>
          List of bought goods
        </ul>
      </div>
      <div>
        <h4>Your change</h4>
        <button>Get change</button>
        <ul>
          List of change
        </ul>
      </div>
    </div>
  );
}
