import React from "react";
import AboutUs from "./AboutUs";
import Meals from "./Meals/Meals";

const Main = (props) => {
  return (
    <main className="bg-grey-50 ">
      <AboutUs />
      <Meals />
    </main>
  );
};

export default Main;
