import { useState } from "react";

export const useCounter = (initialState) => {
    const [quantity, setQuantity] = useState(initialState);
    const onIncrement = () => setQuantity(quantity + 1);
    const onDecrement = () => setQuantity(quantity - 1);
    const onReset = () => setQuantity(initialState);
    return [quantity, onIncrement, onDecrement, onReset];
}