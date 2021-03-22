import React, { useEffect, useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Back from './Back';
import {useLocation} from "react-router-dom";

export default function Card(props){

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
    })

    const kanji = data && data.length > 0 && data[count].kanji
    const kana = data && data.length > 0 && data[count].kana
    const romaji = data && data.length > 0 && data[count].romaji

    return(
        <div className = "card">
        <p className = "nav">Wanji-Kanji &gt; Lessons &gt; Lesson {lessonnum} &gt; {type} {count+1}</p>
        <div className = {location.state.family}>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical}
            >
                <FrontSide
                    >
                    <span className = "kanji">{kanji}</span>
                </FrontSide>
                <BackSide>
                    <span className = "kanji">{kana}</span> 
                    <span> {romaji}</span>
                </BackSide>
            </Flippy>
            <button onClick = {() => {
                if(count===0){
                    setCount(data.length-1) 
                }
                else{
                setCount(count - 1)}}
            }
            className="previous">PREVIOUS</button>
            <button onClick = {() => {
                if(count===data.length-1){
                    setCount(0) 
                }
                else{
                setCount(count + 1)}}
            }
            className="next">NEXT</button>
            <Back/>
        </div>
        </div>
    )
}