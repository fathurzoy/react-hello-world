import React, { Component } from "react";
import { connect } from "react-redux"; //hi order componnet

export class Counter extends Component {
  // state = {
  //   order: 4,
  //   name: "Fathur",
  // };

  // //ketika counter berubah akan mengexecute props
  // handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // };

  // handlePlus = () => {
  //   // alert('plus button')
  //   console.log("plus: ", this);
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //   );
  // };

  // handleMinus = () => {
  //   // alert('minus button')
  //   console.log("minus: ", this);
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   }
  // };

  render() {
    console.log(this.props);
    return (
      <>
        <div className="counter">
          <button className="minus" onClick={this.props.handleMinus}>
            -
          </button>
          <input
            type="text"
            value={this.props.order}
            className="input-counter"
          />
          <button className="plus" onClick={this.props.handlePlus}>
            +
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
    handleMinus: () => dispatch({ type: "MINUS_ORDER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//state global, fungsi dispatch
