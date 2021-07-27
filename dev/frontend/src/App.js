import React from 'react';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import './App.css';

function App() {

  return (
    <body>
      <Header></Header>
      <div class="container-fluid">
        <div class="row">
          <Main></Main>
        </div>
      </div>
    </body>
  );
}

export default App;
