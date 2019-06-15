

import React from 'react';
import CampusCard from './CampusCard';
import BMCC from '../images/BMCC.jpg'
import CityTech from '../images/City_Tech.png'
import Lehman from '../images/lehman-college.jpg'

import AddButton from './AddButton';



const Campuses = () => (


    <div>
        <div>
        <h2 className="top">All Campuses</h2>
        <AddButton name="Add Campus" className="button"/>
        </div>
      
        <CampusCard campusName="BMCC"  description="3 Students" img={BMCC} />
        <CampusCard campusName="City Tech"  description="2 Students" img={CityTech} />
        <CampusCard campusName="Lehman College"  description="2 Students" img={Lehman} />

    
   

    </div>

)

export default Campuses;
