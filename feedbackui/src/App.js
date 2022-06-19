import dataItems from "./data/Data"
import {useState} from 'react'
import React from 'react'
import Header from './components/Header'
import FeedBackItem from './components/FeedBackItem'
import FeedBackList from "./components/FeedBackList"
import FeedBackStats from "./components/FeedBackStats"
import FeedBackForm from "./components/FeedBackForm"



function App() {
  const [feedback, setFeedBack]=useState(dataItems)

  const deleteFeedback=(id)=>{
    // if(window.confirm("Are you sure you want to delete?"))
    {
      setFeedBack(feedback.filter((item)=> {
        return item.id !== id
        // console.log(item.id)
      }
      
      
      
      ))
} 

  }
  // deleteFeedback()

  return (
    <>
    <div className="container-fluid">
      <div className ="row">
                   <div className = "col-xs-12 col-sm-12 col-md-12">
                              <Header text="Feedback UI" />
                              <FeedBackForm/>
                              <FeedBackStats feedback={feedback}/>
                              <div><FeedBackList feedback={feedback}
                              handleDelete={deleteFeedback}/></div>
                   </div>
      </div>
    
    </div>
   
   
    </>
    
  )
}


export default App
