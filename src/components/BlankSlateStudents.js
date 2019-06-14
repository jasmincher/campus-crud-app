
import React from 'react';
import BlankSlate from './BlankSlate';
import AddButton from './AddButton';
import '../ CSS/BlankSlateStudents.css';

const BlankSlateStudents= () => (

    <div className="blank-slate-students">
        <BlankSlate info="There are no students registered in the database"/>
        <AddButton name="Add Student"/>
    </div>

)

export default BlankSlateStudents;
