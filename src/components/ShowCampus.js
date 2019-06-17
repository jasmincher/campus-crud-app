
import React from 'react';
import lehman from '../images/lehman-college.jpg';
import ShowMore from './ShowMore';
import '../ CSS/ShowMore.css';
import { Link } from 'react-router-dom';



const ShowCampus = () => (

    <div>
        <ShowMore img={lehman} name="Lehman College" info="lorem ipsum" />
        <div className="buttons">

            <Link to="/Edit Campus">
                <button className="btn btn-primary btn-sm">Edit</button>
            </Link>

            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
    </div>

)

export default ShowCampus;
