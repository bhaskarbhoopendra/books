import { ICart } from "../interfaces/cart.interface";

const Reducer = (state: any, action: any) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "CLEAR_ONE_ITEM") {
    const newList = state.cart.filter(
      (item: ICart) => item.id !== action.payload
    );
    return { ...state, cart: newList };
  }
  return state;
};

export default Reducer;
