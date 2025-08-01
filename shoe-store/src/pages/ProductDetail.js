import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return product ? (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>₹{product.price}</p>
    </div>
  ) : <p>Product not found</p>;
};

export default ProductDetail;
