
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Navbar.css'

  class Navigationbar extends Component {
      constructor(props) {
          super(props)
          this.state = {
              showLoginModal: false,
              isLoggedIn: false,
              isProf: false
          }
      }

      toggleLoginModal = () => {
        this.setState(prevState=> ({
          showLoginModal: !prevState.showLoginModal,
          failedLogin: false
        }));
      }

      render() { 
          return ( 
              <React.Fragment>
              <nav className="navbar navbar-expand-md fixed-top navbar-pink navbar-light">
                  <a className="navbar-brand" href="/">EduSpace</a>

                  <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <a className="nav-link" href='/dashboard'>Dashboard</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link disabled" href='/calendar'>Calendar</a>
                    </li>
                    <li className="navbar-item">
                        <button id="pink-button" className="btn btn-outline-primary" type="button" onClick={this.toggleLoginModal}>Login</button>
                    </li>
                  </ul>

              </nav>
              <Modal isOpen={this.state.showLoginModal} toggle={this.toggleLoginModal} size="md" centered={true}>
              <ModalHeader toggle={this.toggle}><div className="loginModal">Sign In</div></ModalHeader>
              <ModalBody >
              <div className="form-label-group"> 
                   <label className="login-label" for="email">Email address</label>
                   <input id="email" type="email" className="form-control" placeholder="Enter email" required autoFocus/>
              </div>
        <br></br>
              <div className="form-label-group">
                  <label className="login-label"for="passwd">Password</label>
                  <input id="passwd" type="password" className="form-control" placeholder="Enter password" required/>
                  { this.state.failedLogin ?
                   <div><br></br><div style={{color: 'red', textAlign: 'center'}}>Incorrect credentials</div></div> : null }
              </div>
              </ModalBody>
              <ModalFooter>
              <button type="submit" className="btn btn-primary btn-block" onClick={this.handleLogin}>Login</button> 
              <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
              </p>
              </ModalFooter>
              </Modal>
              </React.Fragment>
           );
      }
  }
   
  export default Navigationbar;