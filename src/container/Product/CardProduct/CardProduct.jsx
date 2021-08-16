import React, { Component } from "react";

class CardProduct extends Component {
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
        <div className="card">
          <div className="img-thumb-prod">
            <img src="https://picsum.photos/seed/23/300" alt="" />
          </div>
          <p className="product-title">Daging Ayam Berbumbu</p>
          <p className="product-price">Rp 410.000</p>
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
        </div>
      </>
    );
  }
}

export default CardProduct;
