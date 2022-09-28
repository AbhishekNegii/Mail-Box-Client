import React from 'react'
import {useHistory} from 'react-router-dom'

const HomePage = () => {
    const history= useHistory()
    const composeMailHandler=()=>{
      history.replace("/composemail")
    }
  return (
    <div>
    <div> Welcome to Home Page</div>
    <button onClick={composeMailHandler}>Compose Mail</button>
    </div>
  )
}

export default HomePage