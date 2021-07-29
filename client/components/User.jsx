import React from 'react';
import AddDataForm from './AddDataForm';
import DeleteUserButton from './DeleteUserButton';
import Graph from './Graph';

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