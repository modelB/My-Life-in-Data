import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import LifeNotesForm from './components/LifeNotesForm';
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
    this.getUserData = this.getUserData.bind(this);
    this.addData = this.addData.bind(this);
  }
  
  getUserData () {
    
    fetch(`/api/userData`)
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


  addData () {
    fetch('/api/addData', { 
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      "record_date": document.querySelector('#formDate').value, 
      "body_fat": document.querySelector('#formBodyFat').value,
      "mental_score": document.querySelector('#formMentalScore').value,
      "weight": document.querySelector('#formWeight').value,
      "net_worth": document.querySelector('#formNetWorth').value
     }) 
    })
      .catch(err => console.log('add user Data: ERROR: ', err));
  }

  componentDidMount() {
    this.getUserData();
  }

  // componentDidUpdate() {
  //   console.log('state', this.state);
  //   this.getUserData();
  // }

    render() {
     
  return (
   
    <div className="router">
      <main>
        <UserList getUserData={this.getUserData} />
        <User userData={this.state.data} addData={this.addData} />
        <LifeNotesForm />
      </main>
    </div>
    
  );
    }
};

export default App;

