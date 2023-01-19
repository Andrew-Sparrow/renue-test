import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../product/product.tsx';
import { getPurchasedProducts } from '../../store/purchased/selectors';


function PurchasedProducts(props) {
  const purchasedProducts = useSelector(getPurchasedProducts);

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
