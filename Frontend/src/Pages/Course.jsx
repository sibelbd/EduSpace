import React, { Component } from 'react';
import Page from '../Components/Page'
import 'react-tabs/style/react-tabs.css';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import Call from './Call'
import ProfilePic from '../Images/dp.jpg'
import { Table } from 'reactstrap';
import { Pie, Bar } from 'react-chartjs-2'
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeTab: 1,
            data: [
                {
                  "label": "sample 1",
                  "value": 10
                },
                {
                  "label": "sample 2",
                  "value": 17
                }
              ]
         }
    }

    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    }

    render() { 
        var colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];
        const content = ( 
            <React.Fragment> 
                <div className="main-page">
                    {this.state.activeTab === 1 ?<div>
                    <h3>Performance</h3>
                    <div className = "performance" style={{float:'left'}}>
                        <h3>Exam 2 Toppers:</h3>
                        <br/>
                    <Table striped dark>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2882990</th>
          <td>Sulbha Aggarwal</td>
          <td>100/100</td>
        </tr>
        <tr>
          <th scope="row">2882679</th>
          <td>John Smith</td>
          <td>98/100</td>
        </tr>
        <tr>
          <th scope="row">2882778</th>
          <td>Kevin Nguyen</td>
          <td>96/100</td>
        </tr>
      </tbody>
    </Table>

                    </div>
                    <div className="performance" style={{float:'right', width:'45%'}}>
                        <h3>Overall Performance</h3>
                        <Bar
                        data={this.state.data}
                        width={100}
                        height={100}
                        options={{ maintainAspectRatio: false }}
                        />
                    </div>

                    </div>: null}

                    {this.state.activeTab === 2 ?<div>
                    <h3>Assign</h3>
                    </div>: null}

                    {this.state.activeTab === 3 ?<div className="table-div">
                    <h3>Gradebook</h3>
                    <Table hover bordered striped dark>
      <thead>
        <tr>
          <th>Due Date</th>
          <th>Title</th>
          <th>Answer</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Mon March 09 2020</th>
          <td>Review Questions #7</td>
          <td>Node.js</td>
          <td>20/21</td>
        </tr>
        <tr>
          <th scope="row">Mon March 16 2020</th>
          <td>Review Questions #6</td>
          <td>PHP</td>
          <td>18/18</td>
        </tr>
        <tr>
          <th scope="row">Tue Feb 18 2020	</th>
          <td>Review Questions #4</td>
          <td>Internet Protocol</td>
          <td>11.3/12</td>
        </tr>
      </tbody>
    </Table>
                    
                    </div>: null}

                    {this.state.activeTab === 4 ?<div>
                    <h3>Class Video Call</h3>
                    <Call channel="class1"/>
                    </div>: null}
                    {this.state.activeTab === 5 ?<div>
                    <h3>Connect with peers</h3>

                    
                    </div>: null}
                </div>
                <div className="sidebar shadow">
                    <ul className="nav flex-column">
                        <img className = "rounded-circle" src={ProfilePic} alt="profile pic" width="80" height="80"/>
                        <br/>
                        <li className="nav-item text-muted">Firstname Lastname</li>
                        <hr></hr>
                        <li className="nav-item" onClick={()=>this.changeTab(1)}><FontAwesomeIcon icon={faShapes}/> Overall Statistics</li>
                        <li className="nav-item" onClick={()=>this.changeTab(2)}><FontAwesomeIcon icon={faClipboardList}/> Assign</li>
                        <li className="nav-item" onClick={()=>this.changeTab(3)}><FontAwesomeIcon icon={faBook}/> Grade</li>
                        <li className="nav-item" onClick={()=>this.changeTab(5)}><FontAwesomeIcon icon={faWifi}/> Connect</li>
                        <li className="nav-item" onClick={()=>this.changeTab(4)}><FontAwesomeIcon icon={faVideo}/> Join Session</li>
                    </ul>
                </div>
               
            </React.Fragment>

         );
        return <Page content={content}/>
    }
}
 
export default Course;