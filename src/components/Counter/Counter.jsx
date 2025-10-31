import React from "react";
import "./Counter.css";
import { Buttons } from "./Buttons";
import { Span } from "./span";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  //   constructor() {
  //     super() // добавляет возможность создания своего конструктора добавляя его в уже существующий
  //     this.state = {
  //     value: 10,
  //   }
  // }

  state = {
    // вместо конструктора (лучший вариант)
    // value: 0,
    value: this.props.initialValue,
  };

  handleEncrement = () => {
    // this.setState({ value: 1 }, () => {
    // метод state для обновления памяти компонента
    // });

    this.setState((prevState) => ({ value: prevState.value + 1 })); // prevState.value - предыдущее значение обьекта , которое не обновлялось до нажатия кнопки
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  //   state = {
  //     value: 0,
  //   };

  //   updateState = {
  //     value: 10,
  // }

  //   newState = {
  //     ...this.state,...this.updateState,
  //   } >>> {
  // value:250,
  // value:75,
  // }

  render() {
    return (
      <div className="counter">
        <Span props={this.state.value} />
        {/* <span className="counter-value">{this.state.value}</span> */}
        {/* <div className="counter-controls">
          <button type="button" onClick={this.handleEncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div> */}

        <Buttons
          onEncrement={this.handleEncrement}
          onDecrement={this.handleDecrement}
        />
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
