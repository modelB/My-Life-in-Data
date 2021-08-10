import React from 'react';

const LifeNotesForm = ({
  addData, userData
}) => {
  
  return (
    <div id="lif">
        Life Events
        <br></br>
        <input id="eventNote" placeholder="Life Event"></input>
        <button id="eventNoteButton">Submit</button>    
        <ol id="lifenoteslist">
        </ol>
    </div>
  );
};

export default LifeNotesForm;