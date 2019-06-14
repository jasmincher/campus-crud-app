
import React from 'react';
import NewForm from './NewForm';
import AddButton from './AddButton';
import '../ CSS/StudentNewForm.css';




const StudentNewForm = () => (

    <div className="new-form">
        <NewForm title="Student Name"/>
        <AddButton name="Add Student"/>
    </div>

)

export default StudentNewForm;
