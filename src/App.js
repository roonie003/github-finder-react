import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/layout/NavBar';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import User from './Components/Users/User';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  //async componentDidMount () {

  //  this.setState({loading: true});

  //  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
  //  this.setState({users: res.data, loading: false});
  //}

  //search github users
  searchUsers = async text => {
    this.setState({loading: true});

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    this.setState({users: res.data.items, loading: false});
  }

  //get single git hub user

  getUser = async (username) => {
    this.setState({loading: true});

    const res = await axios.get(
    `https://api.github.com/search/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  
    this.setState({user: res.data, loading: false});
};

  //clear users from state

  clearUsers = () => this.setState({ users: [], loading: false});

  //set alert
  setAlert=(msg, type) => {
    this.setState ({ alert: { msg, type} });

    setTimeout(() => this.setState({ alert: null}), 3000)
  };

  render() {
    const { users, loading, alert, user} = this.state;
    
    return (
      <Router>
      <div className="App">
        <NavBar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path ='/' render= { props => (
              <Fragment>
                  <Search 
                    searchUsers ={this.searchUsers} 
                    clearUsers ={this.clearUsers} 
                    showClear= {users.length > 0 ? true: false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users}/>
              </Fragment>
            )} />
            <Route exact path ='/about' component={About} />
            <Route exact path = '/user/:login' render={props => (
              <User 
              {...props} 
              getUser={this.getUser} 
              user={user}
              loading={loading}
              />
            )}
            />
          </Switch>
          
        </div>
      </div>
      </Router>
    );
  }
}



export default App;