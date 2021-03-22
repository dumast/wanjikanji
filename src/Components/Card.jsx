import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Back from './Back';
import {Link, useLocation} from "react-router-dom";

export default function Card(props){
    let location = useLocation();
    const lessonnum = location.state.lessonnum.lessonnum
    const type = location.state.family
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
                    <span className = "kanji">{props.kanji}</span>
                </FrontSide>
                <BackSide>
                    <span className = "kanji">{props.kana}</span> 
                    <span> {props.romaji}</span>
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