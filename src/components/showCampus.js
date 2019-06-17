import React from 'react';
import College from '../images/college.png';
import AddButton from './AddButton';
//import ShowMore from './ShowMore';
import '../ CSS/ShowMore.css';
import { Link } from 'react-router-dom';
import showMoreCampus from './showMoreCampus';

const showCampus =(handleClick) => (
    

    <div>
        
        <showMoreCampus img={College} name="Borough Of Manhattan Community College" 
        address="199 Chambers St, New York, NY 10007"
         description="The Borough of Manhattan Community College is a public community college in New York City. 
         It is one of the seven two-year colleges within the City University of New York system" />
        <div className="buttons"></div>
         <Link to="/Edit Campus">
            <button className="btn btn-primary btn-sm">Edit</button>
            </Link>
            <button className="btn btn-danger btn-sm">Delete</button>
        
        <div>
            <showMoreCampus img={College} name="City Tech" 
        address="300 Jay St, Brooklyn, NY 11201"
         description="The New York City College of Technology is a public college in New York City. Founded in 1946,
          it is the City University of New York's college of technology." />
        <div className="buttons"></div>
         <Link to="/Edit Campus">
            <button className="btn btn-primary btn-sm">Edit</button>
            </Link>
            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
        <div>
        <showMoreCampus img={College} name="Lehman College" 
        address="250 Bedford Park Blvd W, The Bronx, NY 10468"
         description="Lehman College is a senior college of the City University of New York in New York, United States.
          Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY." />
        <div className="buttons"></div>
         <Link to="/Edit Campus">
            <button className="btn btn-primary btn-sm">Edit</button>
            </Link>
            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
        
    </div>

    
)

export default showCampus;