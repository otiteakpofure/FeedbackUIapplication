import React from 'react'
import "./styles.css"

//this is for the feedback section

function FeedBackStats({feedback}) {

  //calculate ratings 

  let average = feedback.reduce(( total, current)=>{
              return total + current.rating
  }, 0) / feedback.length; 

  //make the decimal numbers become just one

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    //this is for for the stats for the project 
    <div className= "feedback-stats">
        <h4>{feedback.length} &nbsp;Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average} </h4></div>

  )
}

export default FeedBackStats