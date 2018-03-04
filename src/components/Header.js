import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  render() {
    return (
      <div className="headerSection">
        <Menu mode="horizontal" theme="dark">
          <Menu.Item><img className="logo" src={('./nuutopia-logo-final.svg')} /></Menu.Item>
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/taskboard">Task Board</Link></Menu.Item>
          <Menu.Item><Link to="/postjob">Post a Task</Link></Menu.Item>
          <Menu.Item><a target="_blank" href="https://missionhack-coin.herokuapp.com/blockchain">Blockchain Explorer</a></Menu.Item>
          <Menu.Item><Icon type="smile-o" />23ba997d47943fd02ca7c77d9895c4c67985884410e05af076ab361dfdadd2fa</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
