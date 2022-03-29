import React from 'react';
import './Cart.css'


const Cart = (props) => {
  const {cart} = props;

  let total = 0;
  let count =0;
  for( const product of cart){
   total = total + product.price;
   count = count +product.rating.count;
  }
  const subTotal =parseFloat( total.toFixed(2));
  const tax = parseFloat((total * 0.1).toFixed(2)); ;
  let grandTotal = subTotal+ count + tax;
  return (
    <div className="cart-section">
      <h2> Add to cart</h2>
      <p>
        {" "}
        selected items :{" "}
        <span className="items-counter">{cart.length}</span>{" "}
      </p>
      <p> Total Price: ${subTotal} Usd</p>
      <p> Total Shipping: ${count} Usd</p>
      <p> Tax: ${tax}</p>
      <h3> Grand Total:{grandTotal}</h3>
    </div>
  );
};

export default Cart;
