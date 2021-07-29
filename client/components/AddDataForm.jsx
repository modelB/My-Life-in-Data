import React from 'react';

const AddDataForm = ({
  addData
}) => {
  
  return (
    <div id="addDataForm">
        
        <form id="formData">
        <center><b>Add Data</b></center>
        <hr></hr>
          <div className="dataField">Full Name<input id="formName" /></div>
          <div className="dataField">Date<input id="formDate" /></div>
          <div className="dataField">Body Fat<input id="formBodyFat" /></div>
          <div className="dataField">Mental Score<input id="formMentalScore" /></div>
          <div className="dataField">Weight<input id="formWeight" /></div>
          <div className="dataField">Net Worth<input id="formNetWorth" /></div>
          <div className="dataField"><button onClick={addData}>Add Data</button></div>
        </form>
    </div>
  );
};

export default AddDataForm;
