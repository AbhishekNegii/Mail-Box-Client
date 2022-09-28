import React from 'react'
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
        <Link to="/homepage"></Link>
        <Link to="/authform"></Link>
        <Link to="/composemail"></Link>
    </div>
  )
}

export default Links