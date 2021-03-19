import React from 'react'
import { 
    Link,
    useHistory
  } from 'react-router-dom'; 

export default function Back() {
    const history = useHistory()
    return(
        <div>
            <button className = "back" onClick={() => {history.goBack()}}>
                &lt; Back
            </button>
            
        </div>
    )
}