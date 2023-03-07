import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FoodCtx } from "../../../App";

const MealItem = (props) => {
  const dispatch = useDispatch();
  const amount = useRef();
  const [inputIsValid, setInputIsValid] = useState(true);
  // const [amount, setAmount] = useState(1);
  // const changeHandler = (e) => {
  //   setAmount(Number(e.target.value));
  // };
  const clickHandler = () => {
    const foodQuantity = Number(amount.current.value);
    if (foodQuantity < 1 || foodQuantity > 5) {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    dispatch({ type: "INITIAL_ADD", id: props.id, quantity: foodQuantity });
  };
  const invalidInputClasses = "flex flex-col items-end";
  return (
    <li className="flex justify-between py-4 border-b border-[#ccc]">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl">{props.name}</h2>
        <p className="italic">{props.motto}</p>
        <p className="font-bold text-lg text-brown-200">{`$${props.price}`}</p>
      </div>
      <div className={!inputIsValid && invalidInputClasses}>
        <div className="amount-wrapper flex gap-2 mb-2">
          <p>Amount</p>
          <input
            type="number"
            min="1"
            max="5"
            defaultValue={1}
            ref={amount}
            className="w-[3rem] pl-2 rounded-md border border-[#ccc]"
          ></input>
        </div>
        <button
          className="bg-brown-50 py-1 px-8 rounded-xl text-white"
          onClick={clickHandler}
        >
          + Add
        </button>
        {!inputIsValid && (
          <p className="text-red-400">Enter a value between 1 and 5</p>
        )}
      </div>
    </li>
  );
};

export default MealItem;
