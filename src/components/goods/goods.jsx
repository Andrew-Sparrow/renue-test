import React from 'react';
import { goods } from '../../store/db/goods.ts';
import { Product } from '../product/product.tsx';


export function Goods() {

  return (
    <ul className='goods'>
      {goods.map((product) =>
        <Product
          title={product.title}
          price={product.price}
          amount={product.amount}
          type={product.type}
          key={product.id} />
      )
      }
    </ul>
  );
}
