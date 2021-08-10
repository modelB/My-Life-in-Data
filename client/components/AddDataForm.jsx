import React from 'react';

const AddDataForm = ({
  addData
}) => {
  
  return (
    <div id="addDataForm">
        
        <form id="formData">
        <center><b>Add Data</b></center>
        <hr></hr>
          <div className="dataField">Date<input type="date" id="formDate" /></div>
          <div className="dataField">Body Fat<input id="formBodyFat" placeholder="12.50" /></div>
          <div className="dataField">Mental Score<input id="formMentalScore" placeholder="1-10" /></div>
          <div className="dataField">Weight<input id="formWeight" placeholder="in pounds, ex: 185" /></div>
          <div className="dataField">Net Worth<input id="formNetWorth" placeholder="in thousands, ex: 150" /></div>
          <div className="dataField"><button onClick={addData}>Add Data</button></div>
        </form>
    </div>
  );
};

export default AddDataForm;
