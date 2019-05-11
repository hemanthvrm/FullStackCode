import React, { Component, Fragment } from "react";
import { Card } from "antd";
import "../app.less";
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Card className="defaultcard">Test</Card>

        <Card className="defaultcard">Hello</Card>
      </Fragment>
    );
  }
}

export default Dashboard;
