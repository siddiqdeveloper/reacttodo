import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import AddTodo from './AddTodo';
import  './style.css'
import List from './List';
import Dashbaord from './Dashabord';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 

    <BrowserRouter>
    <Routes>
      <Route path=''  element={<Layout/>} >


        <Route path="" index element={<Dashbaord/>} ></Route>

       <Route path='addtodo' index element={<AddTodo/>} ></Route>
       <Route path='list' index element={<List/>} ></Route>


       <Route path='edit/:code' index element={<AddTodo/>} ></Route>

      </Route>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);


