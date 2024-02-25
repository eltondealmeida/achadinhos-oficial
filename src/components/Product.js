import React from 'react';
import './Product.css';

const Product = ({ name, imageUrl, productUrl }) => {
  return (
    <a href={productUrl} target="_blank" rel="noopener noreferrer" className="product-link">
      <div className="product-card">
        <img src={imageUrl} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
      </div>
    </a>
  );
}

export default Product;
