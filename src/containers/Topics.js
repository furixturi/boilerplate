import React from 'react';
import { Link } from "react-router-dom";

class Topics extends React.Component {
  render(){
    return (
      <div>
        <h1>Topics</h1>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/about">About</Link>
        </h3>
      </div>
    );
  }
}

export default Topics;