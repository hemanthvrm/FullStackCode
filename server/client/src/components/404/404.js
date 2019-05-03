import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import requireAuth from '../requireAuth';
import './404.less';


import {Card, Row, Col, Button} from 'antd';

class errorPage extends Component {


  render() {
    return (
      <Fragment>
            <div className='errorimg' />
      </Fragment>
    );
  }
}

//export default Overview; //temp
export default requireAuth(errorPage);
