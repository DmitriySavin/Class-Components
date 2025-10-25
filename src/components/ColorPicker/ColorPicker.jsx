import { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <h2 className="title">ColorPicker</h2>
        <p>Вибраний Колір:</p>
        <div className="btn-box">
          {data.map(({ label, color }) => (
              <button
                  type="button"
                  key={label}
                  style={{ backgroundColor: color }}
              className="button"
              >{ color}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
