const Controls = ({onIncrement, onDecrement}) => (
    <div className="Counter__controls">
        <button type="button" onClick={onIncrement}>Plus 1</button>
        <button type="button" onClick={onDecrement}>Minus 1</button>
    </div>
);

export default Controls;
