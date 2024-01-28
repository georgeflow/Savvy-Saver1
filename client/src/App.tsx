import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

