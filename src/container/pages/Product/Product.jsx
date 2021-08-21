import React, { Component } from "react";
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";
import { connect } from "react-redux";
import { RootContext } from "../../Home/Home";
import { GlobalConsumer } from "../../../context/context";

export class Product extends Component {
  // state = {
  //   order: 4,
  //   name: "Fathur",
  // };

  // handlePlus = () => {
  //   // alert('plus button')
  //   console.log("plus: ", this);
  //   this.setState({
  //     order: this.state.order + 1,
  //   });
  // };

  // handleMinus = () => {
  //   // alert('minus button')
  //   console.log("minus: ", this);
  //   if (this.state.order > 0) {
  //     this.setState({
  //       order: this.state.order - 1,
  //     });
  //   }
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      // <RootContext.Consumer>
      //   {(value) => {
      //     return (

      //     );
      //   }}
      // </RootContext.Consumer>
      <>
        <p>Halaman Product</p>
        <hr />
        <div className="header">
          <div className="logo">
            <img
              src="https://etanee.id/img/content/img_logo_etanee_white.svg"
              alt=""
            />
          </div>
          <div className="troley">
            <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
            <div className="count">{this.props.state.totalOrder}</div>
          </div>
        </div>
        <CardProduct />
        {/* <CardProduct  onCounterChange={(value) => this.props.onCounterChange(value)}/> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);
