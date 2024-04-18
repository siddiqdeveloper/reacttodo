import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import AddTodo from './AddTodo';
import  './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 

    <BrowserRouter>
    <Routes>
      <Route path=''  element={<Layout/>} >

       <Route path='addtodo' index element={<AddTodo/>} ></Route>

      </Route>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);


