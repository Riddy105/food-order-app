import React, { useContext, useEffect, useReducer, useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Form from "./components/Form";
import store from "./store/index";

export const FoodCtx = React.createContext();
const foodItems = [
  {
    name: "Sushi",
    motto: "Finest fish and veggies",
    price: 22.99,
    id: "Sushi",
  },
  {
    name: "Schnitzel",
    motto: "A german specialty!",
    price: 16.55,
    id: "Schnitzel",
  },
  {
    name: "Barbecue Burger",
    motto: "American, raw, meaty",
    price: 12.99,
    id: "Barbecue Burger",
  },
  {
    name: "Green bowl",
    motto: "Healthy...and green...",
    price: 18.99,
    id: "Green bowl",
  },
];
const cartReducerFn = (state, action) => {
  if (action.type == "INITIAL_ADD") {
    const existingItemIndex = state.cartItems.findIndex(
      (food) => food.id == action.addedFood.id
    );
    // findIndex returns -1 if unable to find any matching element so we leverage on this to either update an existing item or add it as a new item.
    // If items exists, we find it in the array of cartItems and then modify the quantity property inside just like we will do in JS.
    if (existingItemIndex != -1) {
      const existingItem = state.cartItems[existingItemIndex];
      state.cartItems[existingItemIndex] = {
        ...existingItem,
        quantity: action.addedFood.quantity + existingItem.quantity,
      };
      return {
        cartItems: state.cartItems,
        totalAmount:
          state.totalAmount +
          action.addedFood.price * action.addedFood.quantity,
        itemInCart: state.itemInCart + action.addedFood.quantity,
      };
    } else {
      return {
        cartItems: [...state.cartItems, action.addedFood],
        totalAmount:
          state.totalAmount +
          action.addedFood.price * action.addedFood.quantity,
        itemInCart: state.itemInCart + action.addedFood.quantity,
      };
    }
  }
  if (action.type == "INCREAMENT") {
    const itemToIncreamentIndex = state.cartItems.findIndex(
      (item) => item.id == action.id
    );
    const itemToIncreament = state.cartItems[itemToIncreamentIndex];
    state.cartItems[itemToIncreamentIndex] = {
      ...itemToIncreament,
      quantity: itemToIncreament.quantity + 1,
    };
    return {
      cartItems: state.cartItems,
      totalAmount: state.totalAmount + itemToIncreament.price,
      itemInCart: state.itemInCart + 1,
    };
  }
  if (action.type == "DECREAMENT") {
    const itemToDecreamentIndex = state.cartItems.findIndex(
      (item) => item.id == action.id
    );
    const itemToDecreament = state.cartItems[itemToDecreamentIndex];
    state.cartItems[itemToDecreamentIndex] = {
      ...itemToDecreament,
      quantity: itemToDecreament.quantity - 1,
    };
    if (itemToDecreament.quantity === 1) {
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.id
      );
      return {
        cartItems: updatedItems,
        totalAmount: state.totalAmount - itemToDecreament.price,
        itemInCart: state.itemInCart - 1,
      };
    }
    return {
      cartItems: state.cartItems,
      totalAmount: state.totalAmount - itemToDecreament.price,
      itemInCart: state.itemInCart - 1,
    };
  }
};
function App() {
  const [cartDetails, cartDispatchFn] = useReducer(cartReducerFn, {
    cartItems: [],
    totalAmount: 0,
    itemInCart: 0,
  });
  const addToCart = (id, quantity) => {
    const addedFood = foodItems.find((food) => food.id == id);
    cartDispatchFn({
      type: "INITIAL_ADD",
      addedFood: { ...addedFood, quantity },
    });
  };
  const increamentItem = (id) => {
    cartDispatchFn({ type: "INCREAMENT", id });
  };
  const decreamentItem = (id) => {
    cartDispatchFn({ type: "DECREAMENT", id });
  };

  return (
    <Provider store={store}>
      <Header></Header>
      <Main></Main>
    </Provider>
  );
}

export default App;
