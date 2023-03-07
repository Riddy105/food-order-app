import { createStore } from "redux";

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
const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
  itemInCart: 0,
  foodItems,
};
const cartReducerFn = (state = defaultCartState, action) => {
  if (action.type == "INITIAL_ADD") {
    const food = state.foodItems.find((food) => food.id == action.id); // Finding the exact food we want to add to cart in the foodItems array. This is also possible by searching for it in the component itself such that the only payload I add to the action will be the addedFood and I won't need to be doing any extra finding here in the ReducerFn.
    const addedFood = { ...food, quantity: action.quantity };

    const existingItemIndex = state.cartItems.findIndex(
      (food) => food.id == addedFood.id
    );
    // findIndex returns -1 if unable to find any matching element so we leverage on this to either update an existing item or add it as a new item.
    // If items exists, we find it in the array of cartItems and then modify the quantity property inside just like we will do in JS.
    if (existingItemIndex != -1) {
      const pseudoState = { ...state };
      const existingItem = pseudoState.cartItems[existingItemIndex];
      pseudoState.cartItems[existingItemIndex] = {
        ...existingItem,
        quantity: addedFood.quantity + existingItem.quantity,
      };
      return {
        cartItems: pseudoState.cartItems,
        totalAmount: state.totalAmount + addedFood.price * addedFood.quantity,
        itemInCart: state.itemInCart + addedFood.quantity,
        foodItems,
      };
    } else {
      return {
        cartItems: [...state.cartItems, addedFood],
        totalAmount: state.totalAmount + addedFood.quantity * addedFood.price,
        itemInCart: state.itemInCart + addedFood.quantity,
        foodItems,
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
      foodItems,
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
        foodItems,
      };
    }
    return {
      cartItems: state.cartItems,
      totalAmount: state.totalAmount - itemToDecreament.price,
      itemInCart: state.itemInCart - 1,
      foodItems,
    };
  }

  return state;
};

const store = createStore(cartReducerFn);
export default store;
