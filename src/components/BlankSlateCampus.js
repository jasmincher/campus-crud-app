
import React from 'react';
import BlankSlate from './BlankSlate';
import AddButton from './AddButton';
import '../ CSS/BlankSlateStudents.css';

const BlankSlateCampus= () => (

    <div className="blank-slate-campus">
        <BlankSlate info="There are no Campus registered in the database"/>
        <AddButton name="Add Campus"/>
    </div>

)

export default BlankSlateCampus;