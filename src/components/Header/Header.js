import React from "react";
import CartButton from "./CartButton";
import mealImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <header className="text-white bg-brown-50 ">
      <div className="w-4/5 mx-auto py-4 flex justify-between items-center">
        <h1 className="font-semibold text-3xl">ReactMeals</h1>
        <CartButton />
      </div>
      <img src={mealImage} className="w-full h-[25rem]"></img>
    </header>
  );
};

export default Header;
