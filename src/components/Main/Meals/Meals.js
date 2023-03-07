import React, { useContext, useState } from "react";
import MealItem from "./MealItem";
import { FoodCtx } from "../../../App";
import { useDispatch, useSelector } from "react-redux";

const Meals = (props) => {
  const foodItems = useSelector((state) => state.foodItems);

  // const submit = (id, amount) => {
  //   ctx.addToCart(id, amount);
  // };

  return (
    <ul className="w-[70%] mx-auto py-6 px-4 bg-white rounded-xl ">
      {foodItems.map((food) => (
        <MealItem
          name={food.name}
          motto={food.motto}
          price={food.price}
          id={food.id}
          key={food.id}
        />
      ))}
    </ul>
  );
};

export default Meals;
