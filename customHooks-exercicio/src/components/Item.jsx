export const Item = ({
    label,
    quantity,
    onDecrement,
    onReset,
    onIncrement
}) => {
    return (
        <div className="Item">
            <p>{label}</p>
            <p>Quantidade: {quantity}</p>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>Restaurar</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
};