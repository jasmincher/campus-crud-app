import '../ CSS/StudentCard.css'
import React from 'react';

function NewForm(props) {
    return (
        <form>
            <h1>{props.title}</h1> 
            <input type="text"/>  
        </form>                    

    );

}


export default NewForm;
