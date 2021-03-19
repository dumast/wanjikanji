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

  let y = 1;

  const [data,setData] = useState([]);

  const getData = () => {
    fetch("./resources/kanjis_10.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      console.log(response)
      return response.json();
    }).then((response) => {
      console.log(response);
      setData(response);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Home/></Route> 
          <Route path='/Lessons'><Lessons/></Route>
        </Switch>
      </Router>
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
        data && data.length > 0 && data[y-1].kanjis_kanji
      }
      -
      {
        data && data.length > 0 && data[y-1].kanjis_kana
      }
      -
      {
        data && data.length > 0 && data[y-1].kanjis_romaji
      }</p>
    </div>
  );
}

export default App;
