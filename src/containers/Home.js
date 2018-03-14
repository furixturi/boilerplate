import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';

class Home extends React.Component {
  render(){
    return <div>
        <h1>Home</h1>
        <Navigation />
        <h3>
          <Link to="/about">About</Link>
        </h3>
        <h3>
          <Link to="/topics">Topics</Link>
        </h3>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>time</th>
              <th>repo</th>
              <th>event</th>
            </tr>
            {this.props.gitHubEvents.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.created_at}</td>
                <td>{item.repo.name}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    gitHubEvents: state.gitHubUserEvents
  }
}

export default connect(mapStateToProps)(Home);