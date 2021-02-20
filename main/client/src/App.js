import React, {useState, useEffect}from 'react';
import './App.css';
import Signup from './Components/Login/Signup'

function App() {

  const [apiResponse, setApiResponse] = useState("");
  function callAPI(){
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiResponse(res));
  }

  return (
    <div className="App">
      <button onClick={()=>{callAPI()}}>hello</button>
      <p>{apiResponse}</p>
      <p>hello world</p>
      <Signup />
    </div>
  );
}

export default App;
