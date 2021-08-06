import React, { useState } from 'react';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  const [user, setUser] = useState({
    id: 0,
    name: null,
    onChange: onUserChange
  });

  function onUserChange(changedUser) {
    setUser(() => {
      return { id: changedUser.id, name: changedUser.name, onChange: onUserChange };
    });
  }

  return (
    <>
      <Header user={user}></Header>
      <div class="container-fluid">
        <div class="row">
          <Main></Main>
        </div>
      </div>
    </>
  );
}

export default App;
