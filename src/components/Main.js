import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Students from './Students';
import Campuses from './Campuses';
import Home from './Home';
import StudentNewForm from './StudentNewForm';
import CampusNewForm from './CampusNewForm';
import BlankSlateStudents from './BlankSlateStudents';
import BlankSlateCampus from './BlankSlateCampus';
import ShowStudent from './ShowStudent';
import EditStudent from './EditStudent';
import ShowCampus from './ShowCampus';
import EditCampus from './EditCampus';



const Main = () => (
  
    <Switch>
      <Route path='/Home' component={Home}/>
      <Route path='/Students Listing' component={Students}/>
      <Route path='/Campuses Listing' component={Campuses}/>
      <Route path='/New Student Form' component={StudentNewForm}/>
      <Route path='/New Campus Form' component={CampusNewForm}/>
      <Route path='/Blank Slate Students' component={BlankSlateStudents}/>
      <Route path='/Blank Slate Campus' component={BlankSlateCampus} />
      <Route path='/Show Student' component={ShowStudent}/>
      <Route path='/Edit Student' component={EditStudent}/>
      <Route path='/Show Campus' component={ShowCampus}/>     
      <Route path='/Edit Campus' component={EditCampus}/>



    </Switch>

)

export default Main;
