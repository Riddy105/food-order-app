import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { FoodCtx } from "../../App";

const CartItem = (props) => {
  const ctx = useContext(FoodCtx);
  const dispatch = useDispatch();
  const increamentItemHandler = () => {
    dispatch({ type: "INCREAMENT", id: props.id });
  };
  const decreamentItemHandler = () => {
    dispatch({ type: "DECREAMENT", id: props.id });
  };
  return (
    <li className="flex justify-between items-center py-4 border-b border-brown-50  ">
      <div>
        <h2 className="font-bold text-3xl text-grey-100 mb-4">{props.name}</h2>
        <div className="flex gap-7">
          <span className="text-brown-50">{`$ ${props.price}`}</span>
          <span className="border border-grey-200 px-4 rounded-md text-black">{`x ${props.quantity}`}</span>
        </div>
      </div>
      <div className="text-brown-50">
        <button
          className="border border-brown-50 text-xl font-bold rounded-md mr-4 px-4"
          onClick={decreamentItemHandler}
        >
          -
        </button>
        <button
          className="border border-brown-50 text-xl font-bold rounded-md px-4 "
          onClick={increamentItemHandler}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
