import React from 'react'
import { Link } from 'react-router-dom';
import '../ CSS/Home.css';



const Home = () => (
  <div className="home">
    <h4>
      Checkout the other pages:
    </h4>

    {/* <Link className="nav-link" to="/New Student Form">New Student Form</Link> */}
    <Link className="nav-link" to="/Blank Slate Students">Blank Slate Students</Link>
    {/* <Link className="nav-link" to="/New Campus Form">New Campus Form</Link> */}
    <Link className="nav-link" to="/Blank Slate Campus">Blank Slate Campus</Link>
    {/* <Link className="nav-link" to="/Show Student">Show Student</Link> */}

  </div>
)

export default Home;