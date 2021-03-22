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
  const langtype = ['radicals', 'kanjis', 'vocab']
  const type = langtype[Math.floor((Math.random()*3))];
  const num = Math.floor((Math.random()*60)+1);

  //fetch API
  const [data,setData] = useState([]);

  const getData = (type, num) => {
    console.log("Lesson: ", num, "type: ", type)
    fetch(`./resources/${type}_${num}.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((response) => {
      setData(response);
    })
  }

  useEffect(() => {
    getData(type, num)
  }, [])

  //random number in list
  const y = Math.floor((Math.random()*data.length));
  console.log("Number: ", y+1)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component = {Home}></Route> 
          <Route path='/Lessons' component = {Lessons}></Route>
          <Route path='/Card' component = {() => 
            <Card 
              kanji = {data && data.length > 0 && data[y].kanji} 
              kana = {data && data.length > 0 && data[y].kana} 
              romaji = {data && data.length > 0 && data[y].romaji} 
            />}>
          </Route>
          <Route path="/Hub" component = {Hub}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
