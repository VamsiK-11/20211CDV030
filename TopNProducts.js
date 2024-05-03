import React from 'react';
import { TopNProducts } from './src/TopNProducts';
const TopNProducts = () => {
  const N = 5; // display top 5 products
  const products = topNProducts.slice(0, N);

  return (
    <div>
      <h2>Top {N} Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rating: {product.rating}/5</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNProducts;