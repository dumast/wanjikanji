import React, { useEffect, useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Back from './Back';
import {useLocation} from "react-router-dom";
import Arrow1 from  '../SVG/Arrow1.svg'
import Arrow2 from '../SVG/Arrow2.svg'

export default function Card(props){
    
    const imgMatch = /<img .*>/i;
    const cdnMatch = /src=".*"/i;

    let location = useLocation();

    const lessonnum = location.state.lessonnum.lessonnum
    const type = location.state.family

    const [data,setData] = useState([]);
    const [count,setCount] = useState(0);

    const getData = (type, lessonnum) => {
    fetch(`./resources/${type}_${lessonnum}.json`, {
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
        getData(type, lessonnum)
    }, [])    

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    const kanji = data && data.length > 0 && data[count].kanji
    const kana = data && data.length > 0 && data[count].kana
    const romaji = data && data.length > 0 && data[count].romaji

    let src = null
    if(kanji.toString().match(imgMatch)){
        src = kanji.toString().match(cdnMatch)[0].match(/".*"/)[0].replace(/"/g, "")
    }

    return(
        <div className = "card">
        <p className = "nav">Wanji-Kanji &gt; Lessons &gt; Lesson {lessonnum} &gt; {type} {count+1} / {data.length}</p>
        <div className = {type}>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical}
            >
                <FrontSide
                    >
                        {src ? <img className="kanji" src={src} /> : <span className = "kanji">{kanji}</span>}
                  
                </FrontSide>
                <BackSide>
                    <span className = "kanji">{kana}</span> 
                    <span> {romaji}</span>
                </BackSide>
            </Flippy>
            <img onClick = {() => {
                if(count===0){
                    setCount(0) 
                }
                else{
                setCount(count - 1)}}
            }className = "previous" src={Arrow1}></img>
            <img onClick = {() => {
                if(count===data.length-1){
                    setCount(data.length-1) 
                }
                else{
                setCount(count + 1)}}
            }className = "next" src={Arrow2}></img>
            <button className = "first" onClick={()=> setCount(0)}>First</button>
            <button className = "last" onClick={()=> setCount(data.length-1)}>Last</button>
            <button className = "shuffle" onClick = {()=> setData(shuffle(data))}>Shuffle</button>
            <Back/>
        </div>
        </div>
    )
}
