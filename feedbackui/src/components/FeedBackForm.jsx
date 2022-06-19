import React, { useState } from 'react'

function FeedBackForm() {
    {/*Added State to the function */}
    const [text, setText]=useState("")

    const handleTextChange=(e)=>{
        setText(e.target.value)
    }
  return (
    // form and all contents reagding the feedbackform items 
    <div style={{color:"black", fontSize:"1.5rem", marginBottom:"15px"}}>
        <div class="card">
            {/* This is for the form in the feedback setup */}
                    <div class="card-body">
                        
                        <form>
                            <h2>How would you rate your services with us?</h2>
                            {/*This is for the rating section in which users can put their scores on our services */}
                            <div className="input-group">
                                <input type="text" placeholder="write a review" onChange={handleTextChange} value={text} />
                                <button className="btn btn btn-outline-dark " type="submit">send</button>
                            </div>
                        </form>
                    </div>
        </div>
    </div>
  )
}

export default FeedBackForm