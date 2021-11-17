import React, {  Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/layout/NavBar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import User from './Components/Users/User';
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
            <Route exact path ='/' render= { props => (
              <Fragment>
                <Search/>
                <Users/>
              </Fragment>
            )} />
            <Route exact path ='/about' component={About} />
            <Route exact path = '/user/:login' component = { User } />
          </Switch>
          
        </div>
      </div>
      </Router>
      </AlertState>
      </GihubState>
    );
}
  


export default App;
