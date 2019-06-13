import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Students from './Students';
import Campuses from './Campuses';
import Home from './Home';



const Main = () => (
  
    <Switch>
      <Route path='/Home' component={Home}/>
      <Route path='/Students' component={Students}/>
      <Route path='/Campuses' component={Campuses}/>
    </Switch>

)

export default Main;
