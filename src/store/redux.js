import { createSlice, configureStore } from "@reduxjs/toolkit";
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
const cartInitialState = {
  cartItems: [],
  totalAmount: 0,
  itemInCart: 0,
  foodItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    initialAdd(state, action) {},
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
