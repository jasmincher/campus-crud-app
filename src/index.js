import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Campuses from './components/Campuses';
import Students from './components/Students';




const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/components/Campuses">Campuses</Link>
          </li>
          <li>
            <Link to="/components/Students">Students</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/components/Campuses" component={Campuses} />
          <Route path="/components/Students" component={Students} />
          <Route path=""   
          
          
          component={Campuses} />
        </Switch>
      </div>
    </Router>
  )








ReactDOM.render(routing, document.getElementById('root'));
