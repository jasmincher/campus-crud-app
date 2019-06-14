// import '../ CSS/StudentCard.css'
import React from 'react';
import '../ CSS/AddButton.css';

function AddButton(props) {
    return (
       <button type="button" className="btn btn-primary">{props.name}</button>
    );
}

export default AddButton;
