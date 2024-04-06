import React from 'react';
import logo from './logo.svg';
import Main from './layouts/Main';
import Header from './components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
        <Header></Header>
      <Main>
        <Outlet></Outlet>  
      </Main>
        
    </div>
  );
}

export default App;
