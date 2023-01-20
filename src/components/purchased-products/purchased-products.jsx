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
      {Object.entries(purchasedProducts).map((product) =>
        <ProductBought
          title={product.title}
          price={product.price}
          amount={product.amount}
          type={product.type}
          key={product.id}
        />
      )
      }
    </ul>
  );
}

export { PurchasedProducts };
