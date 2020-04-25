import React, { Component } from 'react';
import Page from '../Components/Page'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const content = ( 
        <React.Fragment>
           <div className="top-home">
               <h3>The Active Learning Platform for Remote Classrooms.</h3>
               <hr className="top-line"></hr>
               <p className="lead">
               Recreate the same engaging experience even when you teach online. See how EduSpace is helping educators deliver 
               interactive course content and assessments remotely, ensuring students stay engaged in learning.
               </p>
               <br></br>
               <a id="pink-button" className="btn btn-outline-primary" href="/register">Sign Up</a>
           </div>
          <div className="container">
          <div className="row">
          <div className="col">
            <img style = {{float:'left'}} className="rounded-circle" src="https://tophat.com/wp-content/themes/TOPHAT01/img/home/home-problem-icon-cost.svg" alt="Money Icons" width="120" height="120"/>
            <p className="lead digital">Professors need to rapidly change how they teach.</p>
          </div>
          <div className="col-sm-6">
            <img style = {{float:'left'}} className="rounded-circle" src="https://tophat.com/wp-content/themes/TOPHAT01/img/home/home-problem-icon-engaging.svg" alt="Sleep Icons" width="120" height="120"/>
            <p className="lead digital">Educators are looking for meaningful ways to assess student learning remotely.</p>
          </div>
          </div>

          <div className="row">
          <div className="col-sm-6">
            <img style = {{float:'left'}} className="rounded-circle" src="https://tophat.com/wp-content/themes/TOPHAT01/img/home/home-problem-icon-juggling.svg" alt="Money Icons" width="120" height="120"/>
            <p className="lead digital">Standard online course solutions lack the tools to engage students and keep them connected.</p>
          </div>
          <div className="col-sm-6">
            <img style = {{float:'left'}} className="rounded-circle" src="https://tophat.com/wp-content/themes/TOPHAT01/img/home/home-problem-icon-digital-natives.svg" alt="Sleep Icons" width="120" height="120"/>
            <p className="lead digital">Students are digital natives—and that’s an opportunity.</p>
          </div>
          </div>
          </div>

        </React.Fragment>
         );
        return <Page content={content}/>
    }
}
 
export default Home;