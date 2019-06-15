
import React from 'react';
import StudentCard from './StudentCard';
import profile from '../images/profile.jpg';
import AddButton from './AddButton';
import '../ CSS/Students.css';


const Students = () => (


    <div>
        <div>
        <h2 className="top">All Students</h2>
        <AddButton name="Add Student" className="button"/>
        </div>
      
        <StudentCard studentName="Jane Doe" campusName="Lehman College" img={profile} />
        <StudentCard studentName="John Doe" campusName="Lehman College" img={profile} />
        <StudentCard studentName="Jack Doe" campusName="Lehman College" img={profile} />

    
   

    </div>

)

export default Students;
