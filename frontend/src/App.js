import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState("");
  const changeInput = (event) => {
    setState(event.target.value);

  };

  const sendInput = (event) => {
    Axios.post('/sendText', {text: state}).then(Response => {
      console.log(Response);
    }).catch(Error => {
      console.log("error:" + Error);
      
    });
  };
  return (
    <div className="App">
        <input type="text" name="textbox" placeholder="type you message here" value={state} onChange={changeInput}/>

        <button type="submit" onClick={sendInput}>
          submit
        </button>
      <br/>
      {state}

    </div>
  );
}

export default App;
