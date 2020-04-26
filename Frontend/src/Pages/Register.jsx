import React, { Component } from 'react';
import Page from '../Components/Page'
import './Register.css'
import { Button, ButtonGroup } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userType: 'Student',
            rSelected: 1,
            email: "",
            password: "",
            passwordConfirm: "",
            FirstName:"",
            LastName:"",
            SID:""
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

    register = () => {
        axios.post('url',{
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.FirstName,
            lastName: this.state.LastName,
            SID: this.state.SID,
            userType: this.state.userType
        }
        ).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        });
        
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() { 
        const content = ( 
            <div className="register container card-signin">
                <ButtonGroup>
                <Button color="primary" onClick={()=>this.toggleTab(1)} active={this.state.rSelected === 1}>Student</Button>
                <Button color="primary" onClick={()=>this.toggleTab(2)} active={this.state.rSelected === 2}>Professor</Button>
                </ButtonGroup>
            <div className="card-body">
            <h5 className="card-title text-center" style={{color:"whitesmoke"}}>Register as a {this.state.userType}</h5>
            <form id = "register-form" className="form-signin">
              <div className="form-label-group">
                <input type="text" id="inputUserame" class="form-control" placeholder="First Name" required autofocus/>
                <label for="inputUserame">First Name</label>
              </div>
              <div className="form-label-group">
                <input type="text" id="inputLastName" class="form-control" placeholder="Last Name" required autofocus/>
                <label for="inputLastName">Last Name</label>
              </div>

              {this.state.rSelected === 1 ? <div className="form-label-group">
                <input type="text" id="inputSID" class="form-control" placeholder="Student ID" required autofocus/>
                <label for="inputSID">Student ID</label>
              </div> :null }

              <div className="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
                <label for="inputEmail">Email address</label>
              </div>
              
              <hr/>

              <div className="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                <label for="inputPassword">Password</label>
              </div>
              
              <div className="form-label-group">
                <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
                <label for="inputConfirmPassword">Confirm password</label>
              </div>

              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.register}>Register</button>
            
            </form>
            </div>
            </div>
         );
        return <Page content={content}/>
    }
}
 
export default Register;