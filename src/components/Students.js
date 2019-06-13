import React from 'react';
import StudentCard from './StudentCard';
import profile from '../images/profile.jpg';


const Students = () => (
    <div>
     
        <StudentCard studentName="Jane Doe" campusName="Lehman College" img={profile} />
        <StudentCard studentName="John Doe" campusName="Lehman College" img={profile} />
        <StudentCard studentName="Jack Doe" campusName="Lehman College" img={profile} />

      

    </div>

)
export default Students;
