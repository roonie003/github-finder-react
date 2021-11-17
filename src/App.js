import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/layout/NavBar';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';
import About from './Components/pages/About';
import Alert from './Components/layout/Alert';

import User from './Components/users/User';
import GihubState from './context/gitHub/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
 
    return (
      <GihubState>
        <AlertState>
          <Router>
            <div className="App">
          <NavBar />
            <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path ='/' component={ Home } />
            <Route exact path ='/about' component={About} />
            <Route exact path = '/user/:login' component = { User } />
            <Route component = {NotFound} />
          </Switch>
          
        </div>
      </div>
      </Router>
      </AlertState>
      </GihubState>
    );
}
  


export default App;
