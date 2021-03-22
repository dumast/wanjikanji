import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home'
import Lessons from './Components/Lessons'
import Card from './Components/Card'
import Hub from './Components/Hub'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'; 


function App() {
  //random variables declaration, to select a random radical / kanji / vocab from the whole 60 levels


  //random number in list

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component = {Home}></Route> 
          <Route path='/Lessons' component = {Lessons}></Route>
          <Route path='/Card' component = {Card}>
          </Route>
          <Route path="/Hub" component = {Hub}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
