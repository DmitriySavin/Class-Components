import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  handleEncrement = (event) => {
    const target = event.target;

    console.log("+1");

    console.log(event.target);
    console.log(this);
    // setTimeout(() => {
    //   console.log(event.target);
    // }, 1000);
  };

  handleDecrement = () => {
    console.log("-1");
  };

  render() {
    return (
      <div className="counter">
        <span className="counter-value">0</span>
        <div className="counter-controls">
          <button type="button" onClick={this.handleEncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div>
      </div>
    );
  }
}

// const Counter = () => {
//   return (
//     <div className="counter">
//       <span className="counter-value">0</span>
//       <div className="counter-controls">
//         <button type="button">+1</button>
//         <button type="button">-1</button>
//       </div>
//     </div>
//   );
// };

export default Counter;
