
import React from 'react';
import StudentCard from './StudentCard';
import profile from '../images/profile.jpg';
import AddButton from './AddButton';
import '../ CSS/Students.css';
import { Link } from 'react-router-dom';


const Students = () => (


    <div>
        <div>
            <h2 className="top">All Students</h2>

            <Link to="/New Student Form">
                <AddButton name="Add Student" className="button" />
            </Link>


        </div>


        <Link to="/Show Student">
            <StudentCard studentName="Jane Doe" campusName="Lehman College" img={profile} />
        </Link>


        <Link to="/Show Student">
            <StudentCard studentName="John Doe" campusName="Lehman College" img={profile} />
        </Link>

        <Link to="/Show Student">
            <StudentCard studentName="Jack Doe" campusName="Lehman College" img={profile} />
        </Link>




    </div>

)

export default Students;
