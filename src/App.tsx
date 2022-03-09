import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'
import { Head } from './layout/head/Head'
import { StudentContext } from './context/studentContext';
import { Student } from './api/mockStudent';


function App() {

  return (
    <div className="App">
      <StudentContext.Provider value={Student()}>
        <Head />
        <Outlet />
      </StudentContext.Provider>
    </div >
  );
}

export default App;
