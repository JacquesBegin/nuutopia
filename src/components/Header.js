import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  render() {
    return (
      <div className="headerSection">
        <Menu mode="horizontal">
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/taskboard">Task Board</Link></Menu.Item>
          <Menu.Item><Link to="/postjob">Post a Job</Link></Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
