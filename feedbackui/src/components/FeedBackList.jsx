import React from 'react'
import FeedBackItem from './FeedBackItem'
import "./styles.css"

function FeedBackList({feedback, handleDelete}) {
    
  return (
    <div className="feedback-list">
        { feedback.map((item)=>{
            return (
                <div>
                    <FeedBackItem key={item.id} item={item}
                    // props that handles the detete 
                    handleDelete={handleDelete}/>
                    </div>
            )
        })}
    </div>
  )
}

export default FeedBackList