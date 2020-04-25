import React, { Component } from 'react';
import Page from '../Components/Page'
import './Register.css'
import { Button, ButtonGroup } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userType: 'Student',
            rSelected: 1
         }
    }

    toggleTab = (tab) => {
        if (tab === 1) {
            this.setState({
                rSelected: 1,
                userType: 'Student'
            })
        }
        else {
            this.setState({
                rSelected:2,
                userType: 'Professor'
            })
        }
    }

    render() { 
        const content = ( 
            <div className="register container card-signin">
                <ButtonGroup>
                <Button color="primary" onClick={()=>this.toggleTab(1)} active={this.state.rSelected === 1}>Student</Button>
                <Button color="primary" onClick={()=>this.toggleTab(2)} active={this.state.rSelected === 2}>Professor</Button>
                </ButtonGroup>
            <div class="card-body">
            <h5 class="card-title text-center">Register as a {this.state.userType}</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="text" id="inputUserame" class="form-control" placeholder="First Name" required autofocus/>
                <label for="inputUserame">First Name</label>
              </div>
              <div class="form-label-group">
                <input type="text" id="inputUserame" class="form-control" placeholder="Last Name" required autofocus/>
                <label for="inputUserame">Last Name</label>
              </div>

              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
                <label for="inputEmail">Email address</label>
              </div>
              
              <hr/>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                <label for="inputPassword">Password</label>
              </div>
              
              <div class="form-label-group">
                <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
                <label for="inputConfirmPassword">Confirm password</label>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
            
            </form>
            </div>
            </div>
         );
        return <Page content={content}/>
    }
}
 
export default Register;