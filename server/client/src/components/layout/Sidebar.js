import React, { Component, Fragment } from "react";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const MenuItem = Menu.Item;

class Sidebar extends Component {
  state = {
    collapsed: false
  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu mode="inline">
          <MenuItem key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </MenuItem>
          <MenuItem key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </MenuItem>
          <MenuItem key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </MenuItem>
          <MenuItem key="4">
            <Icon type="user" />
            <span>nav 1</span>
          </MenuItem>
          <MenuItem key="5">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </MenuItem>
          <MenuItem key="6">
            <Icon type="upload" />
            <span>nav 3</span>
          </MenuItem>
          <MenuItem key="7">
            <Icon type="user" />
            <span>nav 1</span>
          </MenuItem>
          <MenuItem key="8">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </MenuItem>
          <MenuItem key="9">
            <Icon type="upload" />
            <span>nav 3</span>
          </MenuItem>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
