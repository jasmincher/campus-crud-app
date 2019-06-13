import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => (


    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">

            <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Campuses Listing">Campuses</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Students Listing">Students</Link>
                </li>
            </ul>
        </div>
    </nav>


)

export default Navbar;
