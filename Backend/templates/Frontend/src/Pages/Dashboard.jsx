import React, { Component } from 'react';
import Page from '../Components/Page'
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import './Dashboard.css'

class DashboardProf extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const content = ( 
            <div id='courseList' className="container shadow">
                <h3>Your Courses:</h3>
                <Row>
                <Col sm="4">
                <Card>
                <CardHeader>ECS 120</CardHeader>
                <CardBody>
                <CardTitle>Theory of Computation</CardTitle>
                <Button color ="info">View</Button>
                </CardBody>
                </Card>
                </Col>
                <Col sm="4">
                <Card>
                <CardHeader>MAT 22B</CardHeader>
                <CardBody>
                <CardTitle>Differential Equations</CardTitle>
                <Button color="info">View</Button>
                </CardBody>
                </Card>
                </Col>
                <Col sm="4">
                <Card>
                <CardHeader>PHY 9D</CardHeader>
                <CardBody>
                <CardTitle>Modern Physics</CardTitle>
                <Button color="info">View</Button>
                </CardBody>
                </Card>
                </Col>
                </Row>
            </div>
         );
        return <Page content={content}/>
    }
}
 
export default DashboardProf;