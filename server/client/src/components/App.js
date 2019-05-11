import React from "react";
import { Link } from "react-router-dom";

import "./app.less";
import { Layout, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const children = this.props.children;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>Hemanths</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
