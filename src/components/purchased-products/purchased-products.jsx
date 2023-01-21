import React from 'react';
import { useSelector } from 'react-redux';
import { ProductBought } from '../product-bought/product-bought.tsx';
import { getPurchasedProducts } from '../../store/purchased/selectors';
import { ENTRY } from '../../util/const.ts';


function PurchasedProducts(props) {
  const purchasedProducts = useSelector(getPurchasedProducts);
  console.log(purchasedProducts)

  return (
    <ul>
      {Object.entries(purchasedProducts).map((productEntry) =>
        <ProductBought
          title={productEntry[ENTRY.VALUE_INDEX].title}
          price={productEntry[ENTRY.VALUE_INDEX].price}
          amount={productEntry[ENTRY.VALUE_INDEX].amount}
          type={productEntry[ENTRY.VALUE_INDEX].type}
          key={productEntry[ENTRY.KEY_INDEX]}
        />
      )
      }
    </ul>
  );
}

export { PurchasedProducts };
