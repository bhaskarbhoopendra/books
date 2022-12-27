import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../compoundComponents/Navbar";
import { useShopping } from "../context/Context";
import { ICart } from "../interfaces/cart.interface";

const Cart = () => {
  const { cart, clearCart, deleteOneItem }: any = useShopping();

  return (
    <div>
      <Navbar />
      {cart.map((item: ICart) => {
        const { id, price, name, image, text }: ICart = item;
        return (
          <article
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <p>{name}</p>
            <p>{price}</p>
            <Button variant="success">Edit</Button>
            <Button onClick={() => deleteOneItem(id)} variant="warning">
              Delete
            </Button>
          </article>
        );
      })}
      <Button onClick={clearCart} variant="danger">
        Clear Cart
      </Button>
    </div>
  );
};

export default Cart;
