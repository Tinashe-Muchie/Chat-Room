import React from 'react';
import GlobalContext from './Components/Chat-Area/Context/GlobalContext'
import './App.css';
//import Signup from './Components/Login/Signup'
import ChatArea from './Components/Chat-Area/ChatArea'

function App() {

  return (
    <div className="App">
      <GlobalContext>
        <ChatArea />
        {/*<Signup />*/}
      </GlobalContext>   
    </div>
  );
}

export default App;
