import React, { Component } from "react";

export class Counter extends Component {
  state = {
    order: 4,
    name: "Fathur",
  };

  //ketika counter berubah akan mengexecute props
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    // alert('plus button')
    console.log("plus: ", this);
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    // alert('minus button')
    console.log("minus: ", this);
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input
            type="text"
            value={this.state.order}
            className="input-counter"
          />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
