import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import { Typography } from '@material-ui/core';
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Typography>
              <Navbar />
              <div>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                </Switch>
              </div>
            </Typography>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
