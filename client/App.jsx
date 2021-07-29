import React, { Component } from 'react';


import UserList from './components/UserList';
import User from './components/User';

import '../stylesheets/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      users: [],
      currentUser: undefined,
      data: [],
     };
    this.getUsers = this.getUsers.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.addData = this.addData.bind(this);
  }
  
  getUsers () {
    fetch('/api/users')
        .then(res => res.json())
        .then((data) => {
          let newUsers = data;
          this.setState((state, props) => {
            return {...state, 'users': newUsers };
          })
        })
        .catch(err => console.log('get users: ERROR: ', err));
  } 
  
  getUserData () {
    
    fetch(`/api/userData?name=${document.querySelector('#currentInput').value}`)
        .then(res => res.json())
        .then((data) => {
          let newData = data;
          console.log('newData', newData);
          this.setState((state, props) => {
            return {...state, 'data': newData };
          })
        })
        .catch(err => console.log('get user Data: ERROR: ', err));
  }

  deleteUser (user) {
    fetch('/api/deleteUser', { 
      method: 'delete', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ "name": user }) 
    })
      .catch(err => console.log('delete user Data: ERROR: ', err));
  }

  addData () {
    fetch('/api/addData', { 
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ "name": document.querySelector('#formName').value, 
      "record_date": document.querySelector('#formDate').value, 
      "body_fat": document.querySelector('#formBodyFat').value,
      "mental_score": document.querySelector('#formMentalScore').value,
      "weight": document.querySelector('#formWeight').value,
      "net_worth": document.querySelector('#formNetWorth').value
     }) 
    })
      .catch(err => console.log('delete user Data: ERROR: ', err));
  }

  setCurrentUser (user) {
    this.setState((state) => {
      console.log('current user updated: ', user);
      return {...state, currentUser: user };
    })
  }
  
  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate() {
    console.log('state', this.state);
  }

    render() {
     
  return (
   
    <div className="router">
      <main>
        <UserList getUserData={this.getUserData} deleteUser={this.deleteUser} setCurrentUser={this.setCurrentUser} users={this.state.users}/>
        <User userData={this.state.data} addData={this.addData} />
      </main>
    </div>
    
  );
    }
};

export default App;

