import React from 'react';
import { Switch, Route } from 'react-router-dom'
import StudentCard from './StudentCard';
import profile from '../images/profile.jpg';


const Students = () => (
    <div>
        

        <StudentCard studentName="Jane Doe" campusName="Lehman College" img={profile} />
        <StudentCard studentName="John Doe" campusName="Lehman College" img={profile} />
        <StudentCard studentName="Jack Doe" campusName="Lehman College" img={profile} />

        <Switch>
            <Route path='/Students Listing' component={StudentCard} />
        </Switch>

    </div>

)
export default Students;
