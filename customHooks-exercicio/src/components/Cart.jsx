import React from "react";
import { useCounter } from "../hooks/useCounter";
import { Item } from "./Item";

export const Cart = () => {
    const [quantity, onIncrement, onDecrement, onReset] = useCounter(0);
  
    return (
      <div className="Cart">
        <h1>Meu Carrinho</h1>
        <Item
          label="My produto massa"
          quantity={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onReset={onReset}
        />
      </div>
    );
  };

 