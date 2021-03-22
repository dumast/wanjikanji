import React from 'react'
import Back from './Back'
import { 
    Link,
    useLocation
  } from 'react-router-dom'; 

export default function Hub(){
    let location = useLocation();
    const lessonnum = location.state.lesson.item
    return(
        <div>
            <p className = "nav">Wanji-Kanji &gt; Lessons &gt; Lesson {lessonnum}</p>
            <div className = "container">
                <Link to = {{
                    pathname:'/Card',
                    state: {lessonnum: {lessonnum}, family: 'radicals'},
                    }}> 
                    <button class="hub rad">Radicals</button></Link>
                <Link to = {{
                    pathname:'/Card',
                    state: {lessonnum: {lessonnum}, family: 'kanjis'},
                    }}>
                    <button class="hub kan">Kanjis</button></Link>
                <Link to = {{
                    pathname:'/Card',
                    state: {lessonnum: {lessonnum}, family: 'vocab'},
                    }}>
                    <button class="hub voc">Vocabulary</button></Link>
            </div>
            <Back/>
        </div>
    )
}