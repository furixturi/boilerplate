import React from 'react';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

class Navigation extends React.Component {
  render(){
    return (
      <Breadcrumb>
        <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/topics'>Topics</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default Navigation;