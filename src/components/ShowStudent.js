
import React from 'react';
import profile from '../images/profile.jpg';
import AddButton from './AddButton';
import ShowMore from './ShowMore';
import '../ CSS/ShowMore.css';
import { Link } from 'react-router-dom';



const ShowStudent = () => (


    <div>
        <ShowMore img={profile} name="Jane Doe" info="3.5 GPA" />
        <div className="buttons">

        <Link to="/Edit Student">
            <button className="btn btn-primary btn-sm">Edit</button>
            </Link>
            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
    </div>

)

export default ShowStudent;
