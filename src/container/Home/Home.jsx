import React, { Component, createContext } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// pages
import BlogPost from "../pages/BlogPost/BlogPost.jsx";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product.jsx";
import YouTubeCompPage from "../pages/YouTubeCompPage/YouTubeCompPage";

// styles
import "./Home.css";

//!context
export const RootContext = createContext();
const Provider = RootContext.Provider; //menjadi tempat bisa dibacanya state secara global

class Home extends Component {
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
      <Router>
        {/* <div>
          <p>Youtube component</p>
          <hr />
          <YoutubeComp time="7.20" title="React JS Bagian 1" desc="2x tonton" />
          <YoutubeComp time="7.30" title="React JS Bagian 2" desc="5x tonton" />
          <YoutubeComp time="7.40" title="React JS Bagian 3" desc="7x tonton" />
          <YoutubeComp
            time="7.50"
            title="React JS Bagian 4"
            desc="20x tonton"
          />
          <YoutubeComp />
          <p>Counter</p>
          <hr />
          <Product />
          <p>LifeCycle Component</p>
          <hr />
          {this.state.showComponent ? <LifeCycleComp /> : null}
          <p>Blog Post</p>
          <hr />
          <BlogPost />
        </div> */}
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <>
            <div className="navigation">
              <Link to="/">Blog Post</Link>
              <Link to="/product">Product</Link>
              <Link to="/lifecycle">Lifecycle</Link>
              <Link to="/youtube-component">Youtube</Link>
            </div>
            <Route path="/" exact component={BlogPost} />
            <Route path="/detail-post/:postID" component={DetailPost} />
            <Route path="/product" component={Product} />
            <Route path="/lifecycle" component={LifeCycleComp} />
            <Route path="/youtube-component" component={YouTubeCompPage} />
          </>
        </Provider>
      </Router>
    );
  }
}

export default Home;
