import React from 'react'
import {FaTimes} from "react-icons/fa"
import "./styles.css"


// import {useState} from "react"
// component for the feedback item
function FeedBackItem({item, handleDelete}) {
  return (
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)}className="close">
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick} className="handleClick">click</button> */}
    </div>
  )
}

export default FeedBackItem