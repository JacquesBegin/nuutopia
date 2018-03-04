import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Tasks from '../db/tasks.json';

class TaskBoard extends Component {
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
