import React, { Component } from "react";
import "./LifeCycleComp.css";
import { connect } from "react-redux";

export class LifeCycleComp extends Component {
  constructor(props) {
    //pertama kali dipanggil
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    //yang kedua dipanggil
    console.log("constgetDerivedStateFromPropsructor");
    return null;
  }

  componentDidMount() {
    //keempat dipaggil
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("this state", this.state);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //ketika komponent hilang
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //yg sering digunakan constructor, render, componentdidmount, componentupdate, componentwillunmount
  render() {
    //ketiga dipanggil
    console.log("render");
    return (
      <>
        <p>Halaman LifeCycle</p>
        <hr />
        <button className="btn" onClick={this.changeCount}>
          Component Button {this.state.count}
        </button>
        <hr />
        <p>Total Order: {0}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

// export default connect(mapStateToProps)(LifeCycleComp);
export default LifeCycleComp;
