

import React from 'react';
import CampusCard from './CampusCard';
import BMCC from '../images/BMCC.jpg'
import CityTech from '../images/City_Tech.png'
import Lehman from '../images/lehman-college.jpg'
import { Link } from 'react-router-dom';
import AddButton from './AddButton';



const Campuses = () => (


    <div>
        <div>
            <h2 className="top">All Campuses</h2>



            <Link to="/New Campus Form">
                <AddButton name="Add Campus" className="button" />

            </Link>

        </div>


        <Link to="/Show Campus">
            <CampusCard campusName="BMCC" description="3 Students" img={BMCC} />

        </Link>

        <Link to="/Show Campus">
            <CampusCard campusName="City Tech" description="2 Students" img={CityTech} />
        </Link>

        <Link to="/Show Campus">
            <CampusCard campusName="Lehman College" description="2 Students" img={Lehman} />
        </Link>



    </div>

)

export default Campuses;
