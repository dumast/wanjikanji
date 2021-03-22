import React, { useEffect, useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Back from './Back';
import {Link, useLocation} from "react-router-dom";

export default function Card(props){

    let location = useLocation();
    const lessonnum = location.state.lessonnum.lessonnum
    const type = location.state.family

    const [data,setData] = useState([]);

    const getData = (type, lessonnum) => {
    console.log("Lesson: ", lessonnum, "type: ", type)
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

    const y = 0

    const kanji = data && data.length > 0 && data[y].kanji
    const kana = data && data.length > 0 && data[y].kana
    const romaji = data && data.length > 0 && data[y].romaji

    return(
        <div className = "card">
        <p className = "nav">Wanji-Kanji &gt; Lessons &gt; Lesson {lessonnum} &gt; {type}</p>
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
            <Back/>
            <p className = "data">
                <a href = "/Card">Reload</a>
            </p>
        </div>
        </div>
    )
}