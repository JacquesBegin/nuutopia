import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

class PostJob extends Component {
  render() {
    return (
      <div className="postjobSection">
        <Header/>
        Post a Job
      </div>
    );
  }
}

export default PostJob;
