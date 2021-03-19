import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home'
import Lessons from './Components/Lessons'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 


function App() {

  const [data,setData] = useState([]);

  const getData = () => {
    fetch("./resources/vocab_1.json", {
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
    getData()
  }, [])

  let y = Math.floor((Math.random()*data.length));
  console.log(data.length)


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Home/></Route> 
          <Route path='/Lessons'><Lessons/></Route>
        </Switch>
      </Router>
      <a href="/">Reload</a>
      {/* { */}
      {/*   data && data.length > 0 && data.map((item) => { */}
      {/*     return ( */}
      {/*       <div> */}
      {/*         <p>{item.kanjis_kanji}</p> */}
      {/*         <p>{item.kanjis_kana}</p> */}
      {/*         <p>{item.kanjis_romaji}</p> */}
      {/*       </div> */}
      {/*     )}) */}
      {/*   } */}
      <p>{
        data && data.length > 0 && data[y].kanji
      }
      -
      {
        data && data.length > 0 && data[y].kana
      }
      -
      {
        data && data.length > 0 && data[y].romaji
      }</p>
    </div>
  );
}

export default App;
