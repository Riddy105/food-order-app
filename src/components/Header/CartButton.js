import React, { useContext, useState } from "react";
import icon from "../../assets/icon.svg";
import Cart from "../Cart/Cart";
import Overlay from "../Cart/Overlay";
import { FoodCtx } from "../../App";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const [cartisOpen, setCartIsOpen] = useState(false);
  const itemInCart = useSelector((state) => state.itemInCart);

  const openCart = () => {
    setCartIsOpen(true);
  };
  const closeCart = () => {
    setCartIsOpen(false);
  };
  return (
    <div>
      <button
        className="bg-brown-100 py-3 px-12 flex items-center gap-2.5 rounded-2xl"
        onClick={openCart}
      >
        <img src={icon} className="w-[25px] h-[25px]"></img>
        <p>Your Cart</p>
        <p className="bg-brown-50 py-1 px-4 rounded-2xl">{itemInCart}</p>
      </button>
      {cartisOpen && <Overlay onClick={closeCart} />}
      {cartisOpen && <Cart closeCart={closeCart} />}
    </div>
  );
};

export default CartButton;
