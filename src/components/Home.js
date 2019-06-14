import React from 'react'
import { Link } from 'react-router-dom';



const Home = () => (
    <div>
      
    To checkout the other pages go to:

    <Link className="nav-link" to="/New Student Form">New Student Form</Link>
    <Link className="nav-link" to="/Blank Slate Students">Blank Slate Students</Link>


   
    </div>
  )

  export default Home;