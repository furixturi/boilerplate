import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component {
  render(){
    return <div>
        <h1>About</h1>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/topics">Topics</Link>
        </h3>
      </div>;
  }
}

export default About;