import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

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
      ],
      skillsets: [
        "Skill 1",
        "Skill 2",
        "Skill 3",
        "Skill 4",
        "Skill 5",
        "Skill 6"
      ],
      locationSelected: "1st Quadrant",
      skillSelected: "Skill 1",
      description: "Task Description"
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSkillsetChange = this.handleSkillsetChange.bind(this);

  }

  handleTitleChange = () => {

  }

  handleLocationChange = (e) => {
    this.setState({locationSelected: e.target.value});
  }

  handleSkillsetChange = (e) => {
    this.setState({skillSelected: e.target.value});
  }

  handleDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  }

  getLocationDropdown = () => {
    let options = this.state.location.map((loc) => {
      return (<option key={Math.random()} value={loc.locationName}>{loc.locationName}</option>)
    });
    return (
      <select value={this.state.locationSelected} onChange={this.handleLocationChange} >
        {options}
      </select>
    );
  }

  getSkillsetDropdown = () => {
    let skills = this.state.skillsets.map((skill) => {
      return (<option key={Math.random()} value={skill.skill}>{skill}</option>)
    });
    return (
      <select value={this.state.skillSelected} onChange={this.handleSkillsetChange} >
        {skills}
      </select>
    )
  }

  render() {
    return (
      <div className="postjobSection">
        <Header/>
        <div className="nuuWrapper">
          Post a Task
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </label>
            {this.getLocationDropdown()}
            <input type="date" name="postDate" />
            {this.getSkillsetDropdown()}
            <textarea value={this.state.description} onChange={this.handleDescriptionChange} />
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default PostJob;
