import React from 'react';
import AddDataForm from './AddDataForm';
import Graph from './Graph';
import GoogleLogin from 'react-google-login';

const User = ({
  addData, userData
}) => {
  
  return (
    <div id="User">
     
        <AddDataForm addData={addData} />
        <Graph userData={userData} />
    </div>
  );
};

export default User;