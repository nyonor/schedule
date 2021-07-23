import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  userParams
} from "react-router-dom";


function App() {

  const [backendOnline, updateBackendOnline] = useState(false);
  const [backendLastResponse, updateBackendLastResponse] = useState('');

  const checkBackendOnline = () => {
    fetch('/api')
      .then((response) => {
        response.text()
          .then((text) => {
            updateBackendLastResponse(text);
            updateBackendOnline(text != null);
          })
      })
      .then(fullfiled=>{
        console.log(fullfiled);
      })
      .then(err => {
        console.log(err);
      });
  };

  return (
    <Router>
      <Switch>
        <Route path='/'>
          {
            backendOnline ?
              <h3>
                Backend ONLINE! {backendLastResponse}
              </h3>
              :
              <h3>
                Backend offline... damn... {backendLastResponse}
              </h3>
          }
          <button onClick={checkBackendOnline}>Check IS backend online</button>
        </Route>
      </Switch>
    </Router>);
}

export default App;
