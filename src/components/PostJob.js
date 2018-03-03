import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

class PostJob extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Post Title Here",
      location: [
        {
          locationName: "1st Quadrant"
        },
        {
          locationName: "2nd Quadrant"
        },
        {
          locationName: "3rd Quadrant"
        },
        {
          locationName: "4th Quadrant"
        }
      ]
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);

  }

  getLocationDropdown = () => {
    let options = this.state.location.map((loc) =>
      <option value={loc.locationName}>{loc.locationName}</option>
    );
    return (
      <select value={this.state.location[0].locationName} onChange={this.handleLocationChange} >
        {options}
      </select>
    );
  }

  render() {
    return (
      <div className="postjobSection">
        <Header/>
        Post a Task
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          {this.getLocationDropdown()}
          
          <input type="submit" value="Submit" />
        </form>


      </div>
    );
  }
}

export default PostJob;
