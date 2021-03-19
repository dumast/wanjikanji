import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home'
import Lessons from './Components/Lessons'
import Card from './Components/Card'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'; 


function App() {
  //random variables declaration, to select a random radical / kanji / vocab from the whole 60 levels
  const langtype = ['radicals', 'kanjis', 'vocab']
  let type = langtype[Math.floor((Math.random()*3))];
  let num = Math.floor((Math.random()*60)+1);

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
  let y = Math.floor((Math.random()*data.length));
  console.log("Number: ", y)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Home/></Route> 
          <Route path='/Lessons'><Lessons/></Route>
          <Route path='/Card'><Card kanji = {data && data.length > 0 && data[y].kanji} kana = {data && data.length > 0 && data[y].kana} romaji = {data && data.length > 0 && data[y].romaji}/></Route>
        </Switch>
      </Router>
      {/*
      {/*   data && data.length > 0 && data.map((item) => { */}
      {/*     return ( */}
      {/*       <div> */}
      {/*         <p>{item.kanjis_kanji}</p> */}
      {/*         <p>{item.kanjis_kana}</p> */}
      {/*         <p>{item.kanjis_romaji}</p> */}
      {/*       </div> */}
      {/*     )}) */}
      {/*   } */}
      {/* <p className = "data">
        <a href = "/Card"></a>
      {
        data && data.length > 0 && data[y].kanji
      }
      {
        data && data.length > 0 && data[y].kana
      }
      {
        data && data.length > 0 && data[y].romaji
      }
      </p> */}
    </div>
  );
}

export default App;
