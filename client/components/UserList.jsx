import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
const UserList = ({
  users, setCurrentUser, deleteUser, getUserData
}) => {
  //console.log('users in userlist', users);
  //console.log(deleteUser);
  //const [localUsers, setLocalUsers] = useState(users.map(el => <option key={`${i++}`} value={el.full_name} />);
    // Update the document title using the browser API
    // console.log('users in userlist', users);
    // useEffect(([localUsers]) => {
    //   let i = 0;
    //   const tempUsers = users.map(el => <option key={`${i++}`} value={el.full_name} />)
    //   setLocalUsers(tempUsers);
    //   console.log('mappedusers in userlist', localUsers);
    // })
  
  const responseGoogle = (response) => {
    axios.post('/auth', {
      id: response.ya,
        first_name: response.Os.ET,
        last_name: response.Os.GR,
        token: response.Zb.access_token
    }).then(()=>getUserData())
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div id="UserList">
        <GoogleLogin
            clientId="232816479761-h26msd3nrnce0dq7v89jls9p2qal3bh9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    </div>
  );
};

export default UserList;