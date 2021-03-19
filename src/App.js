import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data,setData] = useState([]);

  const getData = () => {
    fetch("./resources/kanjis_1.json", {
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
        data && data.length > 0 && data[1].kanjis_kanji
      }</p>
    </div>
  );
}

export default App;
