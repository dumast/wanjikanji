import React from 'react'
import Back from './Back'
import { 
    Link
  } from 'react-router-dom'; 

export default function Hub(){
    return(
        <div>
            <p className = "nav">Wanji-Kanji &gt; Lessons &gt; Lesson x</p>
            <div className = "container">
                <Link to = "/Card"><button class="hub rad">Radicals</button></Link>
                <Link to = "/Card"><button class="hub kan">Kanjis</button></Link>
                <Link to = "/Card"><button class="hub voc">Vocabulary</button></Link>
            </div>
            <Back/>
        </div>
    )
}