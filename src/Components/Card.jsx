import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function Card(props){


    return(
        <div>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical}
            >
                <FrontSide
                    >
                    <p>{props.kanji}</p>
                </FrontSide>
                <BackSide>
                    <p>{props.kana} {props.romaji}</p>
                </BackSide>
            </Flippy>
        </div>
    )
}