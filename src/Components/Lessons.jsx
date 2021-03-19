import React from 'react'
import Back from './Back'
import { 
    Link
  } from 'react-router-dom'; 

export default function Lessons() {
    let buttons = []
    let i = 0;
    for(i = 1; i<61; i++){
        buttons.push("Lesson " + i)
    }
    console.log(buttons)

    return(
        <div>
            <p className = "nav">Wanji-Kanji &gt; Lessons</p>
            <div className = "grid-container">
                {buttons.map((item) => {
                    return(
                    <Link to = "/Card"><button className = "lesson">{item}</button></Link>
                    )
                })}
            </div>
            
            <Back/>
        </div>
    )
}