import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Tasks from '../db/tasks.json';

class TaskBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allTasks: [
        {
          id: 1111,
          owner: 1111,
          title: "Task Title",
          location: "1st Quadrant",
          date: new Date(),
          skillsets: ["Task Skill 1", "Task Skill 2", "Task Skill 3"],
          description: "Task description"
        }
      ]
    };
  }


  render() {
    return (
      <div className="taskboardSection">
        <Header/>
        Task Board
        Task Board
        Task Board
        Task Board
        Task Board
      </div>
    );
  }
}

export default TaskBoard;
