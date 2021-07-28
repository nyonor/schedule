import React from 'react';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import './App.css';

function App() {

  return (
    <>
      <Header></Header>
      <div class="container-fluid">
        <div class="row">
          <Main></Main>
        </div>
      </div>
    </>
  );
}

export default App;
