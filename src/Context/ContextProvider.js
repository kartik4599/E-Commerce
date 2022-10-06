import { useReducer } from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const defaultCart = {
    items: [],
    totalAmount: 0,
  };

  const cartReducer = (state, action) => {
    if (action.type === "Add") {
      const existedId = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existedItem = state.items[existedId];

      if (existedItem) {
        alert("Already added to cart");
        return {
          items: state.items,
          totalAmount: state.totalAmount,
        };
      }

      const updatedTotalAmount = state.totalAmount + action.item.price;
      const updatedItems = [action.item, ...state.items];

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    if (action.type === "Remove") {
      const existedId = state.items.findIndex((item) => item.id === action.id);
      const existedItem = state.items[existedId];

      const updatedTotalAmount = state.totalAmount - existedItem.price;
      const updatedItems = state.items.filter((item) => item.id !== action.id);

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    return defaultCart;
  };
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    dispatchCart({ type: "Add", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default ContextProvider;
