import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ products, handleAddCartBtnClick }) => {
  /* const [products, setProducts] = useState([]);
  const loadProducts = async () => {
    let data;
    try {
      const res = await fetch("/products.json");
      data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []); */

  return (
    <div className="products">
      {products.map((product) => (
        <Product
          product={product}
          handleAddCartBtnClick={handleAddCartBtnClick}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
