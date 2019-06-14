
import React from 'react';
import NewForm from './NewForm';
import AddButton from './AddButton';
import '../ CSS/StudentNewForm.css';




const CampusNewForm = () => (

    <div className="new-form">
        <NewForm title="Campus Name"/>
        <NewForm title="Campus Address"/>
        <AddButton name="Add Campus"/>
    </div>

)

export default CampusNewForm;
