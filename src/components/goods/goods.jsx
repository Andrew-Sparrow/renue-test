import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors.js';

import { Product } from '../product/product.tsx';


export function Goods() {
  const products = useSelector(getProducts);

  return (
    <ul className='goods'>
      {products.map((product) =>
        <Product
          product={product}
          key={product.id}
        />
      )
      }
    </ul>
  );
}
