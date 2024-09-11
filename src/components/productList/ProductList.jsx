import React, { useState } from "react";
import "./ProductList.css";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const ProductList = ({ searchQuery }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.length ? (
        filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            {product.name}
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductList;
