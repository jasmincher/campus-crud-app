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
            

        </div>
    );
}


export default ShowMore;
