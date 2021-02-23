import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
//import Signup from './Components/Login/Signup';
import ChatArea from './Components/Chat-Area/ChatArea'

function App() {

  return (
    <div className="App">
      <Router>
        <>
        <ChatArea />
        <Switch>
          <Route>

          </Route>
        </Switch>
        </>
      </Router> 
    </div>
  );
}

export default App;
