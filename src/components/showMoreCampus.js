import React from 'react';
import '../ CSS/ShowMore.css';
import ShowStudent from './ShowStudent.js'

function showMoreCampus(props) {
    return (
        <div className="info">

            <img src={props.img} className="show-more-img" />

            <div className="description">
                <h3>{props.name}</h3>
                <p>{props.address}</p>
                <p>{props.description}</p>
                <p>{props.ShowStudent}</p>
            </div>
            

        </div>
    );
}


export default showMoreCampus;