import React from 'react'
import { Link } from 'react-router-dom';
import '../ CSS/Home.css';



const Home = () => (
  <div className="home">
    <h4>
      Checkout the other pages:
    </h4>

    <Link className="nav-link" to="/New Student Form">New Student Form</Link>
    <Link className="nav-link" to="/Blank Slate Students">Blank Slate Students</Link>

  </div>
)

export default Home;