import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Back from './Back';

export default function Card(props){
    console.log(props.family)
    return(
        <div className = "card">
        <p className = "nav">Wanji-Kanji &gt; Lessons &gt; Lesson x &gt; type</p>
        <div className = {props.family}>
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