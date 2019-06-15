
import React from 'react';
import CampusCard from './CampusCard';
//import profile from '../images/profile.jpg';
import lehman from '../images/lehman-college.jpg';
import city from '../images/city-college.jpg';
import Berkeley from '../images/Berkeley-College.jpg';
import Brooklyn from '../images/Brooklyn-College.png';
import City_Tech from '../images/City_Tech.png';
import BMCC from '../images/BMCC.jpg';

import AddButton from './AddButton';
import '../ CSS/Students.css';



const Campus = () => (


    <div>
        <div>
        <h2 className="top">All Campuses</h2>
        <AddButton name="Add Campus" className="button"/>
        </div>
      
        <CampusCard img={lehman-college.jpg} campusName="Lehman College"campusAddress="250 Bedford Park Blvd W, Bronx, NY 10468 " description="lorem lorem" />
        <CampusCard img={city-college.jpg} campusName="City College" campusAddress="160 Convent Ave, New York, NY 10031" description="lorem lorem" />
        <CampusCard img={Berkeley-college.jpg} campusName="Berkeley College" campusAddress="3 E 43rd St, New York, NY 10017" description="lorem lorem" />
        <CampusCard img={Brooklyn-College.png} campusName="Brooklyn College" campusAddress="2900 Bedford Ave, Brooklyn, NY 11210" description="lorem lorem" />
        <CampusCard img={City_Tech.png} campusName="NYC College of Technology" campusAddress="300 Jay St, Brooklyn, NY 11201" description="lorem lorem" />
        <CampusCard img={BMCC.jpg} campusName="Borough of Manhattan Community College" campusAddress="199 Chambers St, New York, NY 10007" description="lorem lorem" />

    
   

    </div>
    

)
export default Campus;