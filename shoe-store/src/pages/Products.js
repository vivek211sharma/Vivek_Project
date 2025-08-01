import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const Products = () => (
  <div>
    <h2>Products</h2>
    {products.map(product => <ProductCard key={product.id} product={product} />)}
  </div>
);

export default Products;
