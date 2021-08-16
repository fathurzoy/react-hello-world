import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>Youtube component</p>
        <hr />
        <YoutubeComp  time="7.20" title="React JS Bagian 1" desc="2x tonton"/>
        <YoutubeComp time="7.30" title="React JS Bagian 2" desc="5x tonton"/>
        <YoutubeComp time="7.40" title="React JS Bagian 3" desc="7x tonton"/>
        <YoutubeComp time="7.50" title="React JS Bagian 4" desc="20x tonton"/>
        <YoutubeComp/>  */}
        <p>Counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;
