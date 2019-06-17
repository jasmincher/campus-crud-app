
import React from 'react';
import profile from '../images/profile.jpg';
import AddButton from './AddButton';
import ShowMore from './ShowMore';
import '../ CSS/ShowMore.css';



const ShowStudent = () => (


    <div>
        <ShowMore img={profile} name="Jane Doe" info="3.5 GPA"/>   
    </div>

)

export default ShowStudent;
