import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Back from './Back';

export default function Card(props){


    return(
        <div className = "card">
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
    )
}