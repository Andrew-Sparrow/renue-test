import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../product/product.tsx';
import { getPurchased } from '../../store/purchased/selectors';


function PurchasedProducts(props) {
  const purchasedProducts = useSelector(getPurchased);

  return (
    <ul>
      {purchasedProducts.map((product) =>
        <Product
          id={product.id}
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
