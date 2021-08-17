import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import BlogPost from "../BlogPost/BlogPost.jsx";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }
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
        {/* <p>Counter</p>
        <hr />
        <Product /> */}
        <p>LifeCycle Component</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null}
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
