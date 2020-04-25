import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Pages/Home'
import Register from './Pages/Register'
import './App.css';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';

const App = ({location}) => { 
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 300 }
  return (
    <TransitionGroup className="transition-group">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade" appear>
          <section className="route-section">
          <Switch location={location}>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route component={NotFound}/>
        </Switch>
        </section>
        </CSSTransition>
        </TransitionGroup>
  );
}

export default withRouter(App);
