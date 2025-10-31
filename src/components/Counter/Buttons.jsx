export const Buttons = ({onEncrement, onDecrement}) => {
    return (
        <div className="counter-controls">
          <button type="button" onClick={onEncrement}>
            +1
          </button>
          <button type="button" onClick={onDecrement}>
            -1
          </button>
        </div>
    )
}