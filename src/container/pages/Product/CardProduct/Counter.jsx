import React, { Component } from "react";
import { connect } from "react-redux"; //hi order componnet
import ActionType from "../../../../redux/reducer/globalActionType";
import { RootContext } from "../../../Home/Home";

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
      <RootContext.Consumer>
        {(value) => {
          console.log("value", value);
          return (
            <div className="counter">
              {/* <button className="minus" onClick={(this.props.handleMinus)}> */}
              <button className="minus" onClick={() => null}>
                -
              </button>
              <input
                type="text"
                value={value.totalOrder}
                className="input-counter"
              />
              <button className="plus" onClick={() => null}>
                +
              </button>
            </div>
          );
        }}
      </RootContext.Consumer>
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
    handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
  };
};

//state global, fungsi dispatch
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
