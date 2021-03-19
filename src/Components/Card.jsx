import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function Card(){


    return(
        <div>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical}
            >
                <FrontSide
                    >
                    RICK
                </FrontSide>
                <BackSide>
                    ROCKS
                </BackSide>
            </Flippy>
        </div>
    )
}