import React from "react";
import { Link } from "react-router-dom";

import "./app.less";

import { Layout } from "antd";
const { Footer, Content } = Layout;

export default ({ children }) => {
  return (
    <Layout>
      <Layout className="contentlayout">
        <Content className="contentstyle">{children}</Content>
        <Footer className="footer" />
      </Layout>
    </Layout>
  );
};
