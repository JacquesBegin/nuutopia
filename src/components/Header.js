import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="headerSection">
        <Link to="/">Home</Link>
        <Link to="/taskboard">Task Board</Link>
        <Link to="/postjob">Post a Job</Link>
      </div>
    );
  }
}

export default Header;
