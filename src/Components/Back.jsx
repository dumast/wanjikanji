import React from 'react'
import { 
    Link
  } from 'react-router-dom'; 

export default function Back() {
    return(
        <div>
            <Link to = "/"><p className = "back">&lt;Back</p></Link>
        </div>
    )
}