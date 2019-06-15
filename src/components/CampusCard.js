
import React from 'react';
import '../ CSS/CampusCard.css'

function CampusCard(props) {
    return (
        <div className="campus-card">
            
            <img src={props.img} className="campus-img" />
           
            <div className="desc">
                <p>{props.campusName}</p>
                <p>{props.description}</p>
            </div>

        </div>
    );
}


export default CampusCard;
