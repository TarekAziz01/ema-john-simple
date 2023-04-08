import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handelRemoveFromCart = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handelClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handelRemoveFromCart={handelRemoveFromCart}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handelClearCart={handelClearCart}>
          <Link className="proceed-link" to="/checkout">
            <button className="btn-proceed">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
