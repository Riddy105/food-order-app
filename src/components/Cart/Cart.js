import React, { useContext } from "react";
import CartItem from "./CartItem";
import { FoodCtx } from "../../App";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.totalAmount);

  return (
    <div className="fixed top-[20vh] left-[20%] w-3/5 max-h-[70vh] overflow-y-scroll mx-auto rounded-lg p-4 z-20 bg-white ">
      <ul className="">
        {cartItems.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            key={item.id}
            id={item.id}
            quantity={item.quantity}
          />
        ))}
      </ul>
      <div className="flex justify-between text-black font-semibold text-2xl my-4">
        <p className="">Total Amount</p>
        <span className="">{"$" + totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="py-2 px-8 border border-brown-50 rounded-3xl text-brown-50"
          onClick={props.closeCart}
        >
          Close
        </button>
        <button className="py-2 px-8 bg-brown-50 rounded-3xl">Order</button>
      </div>
    </div>
  );
};

export default Cart;
