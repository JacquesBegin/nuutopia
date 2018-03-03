import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Card from "antd/lib/card";
import Icon from "antd/lib/icon";
import message from "antd/lib/message";

class TaskBoard extends Component {

  render() {

  function handleClick(e) {
    e.preventDefault();
    
    message.info("Job has been accepted!");

    // TODO: Make a call to blockchain
    document.querySelector('.job-accepted').play();
  }  

    return <div className="taskboardSection">
        <Header />
        <audio class="job-accepted">
          <source src="job-accepted.mp3" />
        </audio>
        <Card title="Cultivate the crops" extra={<a href="#" onClick={handleClick}>
              Accept Job&nbsp;<Icon type="check-circle" />
            </a>} style={{ width: 300 }}>
          <p>Details: 6 hectres of crops need to be cultivated.</p>
          <p>
            <Icon type="home" />&nbsp; Jupiter Farms, Sector 5B
          </p>
        </Card>
        <Card title="Card title" extra={<a href="#">
              Accept Job
            </a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" extra={<a href="#">
              Accept Job
            </a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" extra={<a href="#">
              Accept Job
            </a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" extra={<a href="#">
              Accept Job
            </a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>;
  }
}

export default TaskBoard;
