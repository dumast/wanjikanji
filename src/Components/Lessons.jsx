import React from 'react'
import Back from './Back'
import {
    Link
  } from 'react-router-dom'; 

export default function Lessons() {
    let buttons = []
    let i = 0;
    for(i = 1; i<61; i++){
        buttons.push(i)
    }
    return(
        <div>
            <p className = "nav">Wanji-Kanji &gt; Lessons</p>
            <div className = "grid-container">
                {buttons.map((item) => {
                    return(
                    <Link to = {{
                        pathname:`Hub`,
                        state: {lesson: {item}}
                    }}><button className = "lesson">Lesson {item}</button></Link>
                        
                    )
                })}
            </div>
            <Back/>
        </div>
    )
}