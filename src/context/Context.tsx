import { createContext, ReactNode, useContext, useReducer } from "react";
import cartItem from "../data/data";
import Reducer from "../reducer/Reducer";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const initialState = {
  cart: cartItem,
};
export const ShoppingCartContext = createContext({});
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const deleteOneItem = (id: number) => {
    return dispatch({
      type: "CLEAR_ONE_ITEM",
      payload: id,
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        ...state,
        clearCart,
        deleteOneItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShopping = () => {
  return useContext(ShoppingCartContext);
};
