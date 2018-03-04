import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import dbConnect from '../db/dbConnections.js';
import { Form, Icon, Input, Button, Dropdown, Menu, DatePicker, TimePicker, Message } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class PostJob extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Post Title Here",
      location: [
        {
          locationName: "1A"
        },
        {
          locationName: "1B"
        },
        {
          locationName: "1C"
        },
        {
          locationName: "1D"
        },
        {
          locationName: "2A"
        },
        {
          locationName: "2B"
        },
        {
          locationName: "2C"
        },
        {
          locationName: "2D"
        },
        {
          locationName: "3A"
        },
        {
          locationName: "3B"
        },
        {
          locationName: "3C"
        },
        {
          locationName: "3D"
        },
        {
          locationName: "4A"
        },
        {
          locationName: "4B"
        },
        {
          locationName: "4C"
        },
        {
          locationName: "4D"
        }
      ],
      skillsets: [
        "Heat Immunity",
        "Damage resistance",
        "Cat-like reflexes",
        "Invulnerability",
        "Omnilinguilism",
        "Superhuman Strength"
      ],
      locationSelected: "1st Quadrant",
      skillSelected: "Skill 1",
      description: "Task Description"
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSkillsetChange = this.handleSkillsetChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
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

  handleMenuClick = (e) => {
    // this.setState({locationSelected: e.target.value});
    console.log(e);
  }

  // getLocationDropdown = () => {
  //   let options = this.state.location.map((loc) => {
  //     return (<Menu.Item key={Math.random()} value={loc.locationName}>{loc.locationName}</Menu.Item>)
  //   });
  //   return (
  //     <Menu value={this.state.locationSelected} onClick={this.handleMenuClick}>
  //       {options}
  //     </Menu>
  //   );
  // }

  getLocationDropdown = () => {
    let options = this.state.location.map((loc) => {
      return (<option key={Math.random()} value={loc.locationName}>{loc.locationName}</option>)
    });
    return (
      <select name="location" value={this.state.locationSelected} onChange={this.handleLocationChange} >
        {options}
      </select>
    );
  }

  getSkillsetDropdown = () => {
    let skills = this.state.skillsets.map((skill) => {
      return (<option key={Math.random()} value={skill.skill}>{skill}</option>)
    });
    return (
      <select name="skills" value={this.state.skillSelected} onChange={this.handleSkillsetChange} >
        {skills}
      </select>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("dbConnect: ", dbConnect);
    dbConnect.addNewTask(e.target.closest("form"));
  }

  render() {
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <div className="postjobSection">
        <Header/>
        <div className="formWrapper">
          <h1>Post a Task</h1>
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                label="Title"
              >
                <Input name="title" type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </FormItem>
            <FormItem
              label="Location"
            >
              {this.getLocationDropdown()}

            </FormItem>
            <FormItem
              label="Date"
            >
                <DatePicker />
            </FormItem>
            <FormItem
              label="Skills"
            >
            {this.getSkillsetDropdown()}
            </FormItem>
            <TextArea name="description" value={this.state.description} onChange={this.handleDescriptionChange} rows={4} />
            <br/>
            <input type="submit" value="Submit" />
          </Form>
        </div>
      </div>
    );
  }
}

export default PostJob;
