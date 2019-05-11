import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./app.less";
import Sidebar from "./layout/Sidebar";
import { Layout, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const children = this.props.children;
    return (
      <Layout>
        <Sidebar />
        <Layout className="contentlayout">
          <Header className="header" />
          <Content className="contentstyle">{children}</Content>
          <Footer className="footer">Hemanths</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
