import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return <div>
        <h1>Home</h1>
        <h3>
          <Link to="/about">About</Link>
        </h3>
        <h3>
          <Link to="/topics">Topics</Link>
        </h3>
      </div>;
  }
}

export default Home;