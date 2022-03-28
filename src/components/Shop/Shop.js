import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Products/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("store.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart= [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <div className="shop">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-section">
          <h2> Add to cart</h2>
          <p> selected items : {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
