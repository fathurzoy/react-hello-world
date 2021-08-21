import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Hooks.css";

// export class Hooks extends Component {
//   // * state
//   state = {
//     count: 0,
//   };

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   // * lifecycle
//// ketika komponen pertama kali dipanggil
//   componentDidMount() {
//     document.title = `Title Change: ${this.state.count}`;
//   }

////ketika komponen update

//   componentDidUpdate() {
//     document.title = `Title Change: ${this.state.count}`;
//   }

////ketika komponen hilang
//   componentWillUnmount() {
//     document.title = `React App`;
//   }

//   render() {
//     return (
//       <div className="p-hooks">
//         <p>Nilai Saya ini adalah : {this.state.count}</p>
//         <button onClick={this.onUpdate}>Update Nilai</button>
//       </div>
//     );
//   }
// }

const Hooks = () => {
  // *state
  const [count, setCount] = useState(0);

  // * lifecycle
  useEffect(() => {
    document.title = `Title Change: ${count}`;
    return () => {
      //kalo return di useeffect itu sama aja componentWillUnmount
      document.title = `React App`;
    };
  });

  return (
    <div className="p-hooks">
      <p>Nilai Saya ini adalah : {count}</p>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update nilai
      </button> */}
      <Button action={[count, setCount]} />
    </div>
  );
};

const Button = ({ action }) => {
  const [count, setCount] = action;

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Nilai
      </button>
    </>
  );
};

export default Hooks;
