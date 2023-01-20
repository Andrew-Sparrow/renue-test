import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors.js';

import { Product } from '../product/product.tsx';
import { ENTRY } from '../../util/const.ts';

export function Goods() {
  const products = useSelector(getProducts);

  return (
    <ul className='goods'>
      {Object.entries(products).map((entry) =>
        <Product
          product={entry[ENTRY.VALUE_INDEX]}
          key={entry[ENTRY.KEY_INDEX]}
        />
      )
      }
    </ul>
  );
}
