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
                <h3 style={{color:"whitesmoke"}}>Your Courses:</h3>
                <Row>
                <Col sm="4">
                <Card>
                <CardHeader>Class Code</CardHeader>
                <CardBody>
                <CardTitle>Class Name</CardTitle>
                <a className="btn btn-secondary" href='/course/1'>View</a>
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