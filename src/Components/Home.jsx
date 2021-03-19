import React from 'react'
import { 
    Link
  } from 'react-router-dom'; 

export default function Home() {
    return(
        <div>
            <h1>Wanji-Kanji</h1>
                <Link to = "/Lessons"><button className = 'lessons'>Lessons</button></Link>
        </div>
    )
}