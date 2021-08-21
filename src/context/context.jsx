//disebut HI ORDER COMPONENT
import React, { Component, createContext } from "react";

//!context
export const RootContext = createContext();

//provider
const Provider = RootContext.Provider; //menjadi tempat bisa dibacanya state secara global
const GlobalProvider = (Children) => {
  return class ParentComp extends Component {
    state = {
      totalOrder: 2,
    };

    dispatch = (action) => {
      if (action.type === "PLUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      }
      if (action.type === "MINUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
    };

    render() {
      return (
        <Provider value={{ state: this.state, dispatch: this.dispatch }}>
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};
export default GlobalProvider;

//consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
