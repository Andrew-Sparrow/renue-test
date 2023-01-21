import React from 'react';
import { useSelector } from 'react-redux';
import { ProductBought } from '../product-bought/product-bought.tsx';
import { getPurchasedProducts } from '../../store/purchased/selectors';
import { ENTRY } from '../../util/const.ts';


function PurchasedProducts(props) {
  const purchasedProducts = useSelector(getPurchasedProducts);

  return (
    <ul>
      {Object.entries(purchasedProducts).map((productEntry) => {
        return <ProductBought
          product={productEntry[ENTRY.VALUE_INDEX] }
          key={productEntry[ENTRY.KEY_INDEX]}
        />
      }
      )
      }
    </ul>
  );
}

export { PurchasedProducts };
