//this will show student img, student name, and campus name, this will show up on the students listing
import React from 'react';
import '../ CSS/StudentCard.css'

function StudentCard(props) {
    return (
        <div className="card">
            <img src={props.img} />
           
            <div className="font">
                <p>{props.studentName}</p>
                <p>{props.campusName}</p>
            </div>

        </div>
    );
}


export default StudentCard;
