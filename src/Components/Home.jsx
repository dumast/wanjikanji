import React from 'react'
import { 
    Link
  } from 'react-router-dom'; 

export default function Home() {
    return(
        <div>
            <h1>Wanji-Kanji</h1>
                <Link to = "/Lessons"><button className = 'lessons'>Lessons</button></Link>
            <h6 className = "wanikani"><a href = "https://wanikani.com" target="_blank">WaniKani.com</a> (non affiliated)</h6>
        </div>
    )
}