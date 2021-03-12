import React, {useState} from 'react';
import GlobalContext from './Components/Chat-Area/Context/GlobalContext'
import './App.css';
import Signup from './Components/Login/Signup'
import ChatArea from './Components/Chat-Area/ChatArea'

function App() {

  const [id, setId] = useState()

  return (
    <div className="App">
      <GlobalContext>
        { id
          ? <ChatArea id={id} />
          : <Signup onIdSubmit={setId} />
        } 
      </GlobalContext>   
    </div>
  );
}

export default App;
