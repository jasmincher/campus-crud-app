import React from 'react';
import '../ CSS/StudentCard.css'

function StudentCard(props) {
    return (
        <div className="student-card">
            
            <img src={props.img} className="student-img"/>
           
            <div className="text">
                <p>{props.studentName}</p>
                <p>{props.campusName}</p>
            </div>

        </div>
    );
}


export default StudentCard;
