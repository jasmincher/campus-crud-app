import React from 'react';
import '../ CSS/ShowMore.css';


function ShowMore(props) {
    return (
        <div className="info">

            <img src={props.img} className="show-more-img" />

            <div className="description">
                <h3>{props.name}</h3>
                <p>{props.info}</p>
            </div>
            

            <div className="buttons">

            <button className="btn btn-primary btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
    );
}


export default ShowMore;
