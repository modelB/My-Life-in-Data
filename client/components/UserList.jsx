import React, { useState, useEffect } from 'react';

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
    let i =0;
  function setCurrentUserAndGetData () {
    let temp = document.querySelector('#currentInput').value;
    console.log('temp', temp);
    setCurrentUser(temp);
    getUserData(temp)
  }

  return (
    <div id="UserList">
        <form key="500" action="/" method="get">
        <label key="400">Choose person:</label>
          <input key="300" list="user" text="fuck" name="user" id="currentInput" />
          <button onClick={()=> {
            event.preventDefault();
            setCurrentUserAndGetData();
          }}>Update User</button>
          <datalist key="200" id="user">
            {users.map(el => <option key={`${i++}`} value={el.full_name} />)}
          </datalist>
          <button onClick={()=>deleteUser(document.querySelector('#currentInput').value)} key="700">Delete User</button>
        </form> 
    </div>
  );
};

export default UserList;