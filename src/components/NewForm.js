import '../ CSS/NewForm.css'
import React from 'react';

function NewForm(props) {
    return (
        <form>
            <h2>{props.title}</h2> 
            <input type="text"/>  
        </form>                    

    );

}

export default NewForm;
