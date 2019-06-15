import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Students from './Students';
import Campuses from './Campuses';
import Home from './Home';
import StudentNewForm from './StudentNewForm';
import CampusNewForm from './CampusNewForm';
import BlankSlateStudents from './BlankSlateStudents';
import BlankSlateCampus from './BlankSlateCampus';


const Main = () => (
  
    <Switch>
      <Route path='/Home' component={Home}/>
      <Route path='/Students Listing' component={Students}/>
      <Route path='/Campuses Listing' component={Campuses}/>
      <Route path='/New Student Form' component={StudentNewForm}/>
      <Route path='/New Campus Form' component={CampusNewForm}/>
      <Route path='/Blank Slate Students' component={BlankSlateStudents}/>
      <Route path='/Blank Slate Campus' component={BlankSlateCampus}/>
    </Switch>

)

export default Main;
