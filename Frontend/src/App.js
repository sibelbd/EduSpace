import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Pages/Home'
import './App.css';

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
        </Switch>
        </section>
        </CSSTransition>
        </TransitionGroup>
  );
}

export default withRouter(App);
