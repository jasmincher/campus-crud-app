import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Campuses from './components/Campuses';
import Students from './components/Students';
import Header from './components/Header';


const routing = (

    <Router>
        <Header />

        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">

                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/components/Campuses">Campuses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/components/Students">Students</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/components/Campuses" component={Campuses} />
            <Route path="/components/Students" component={Students} />
        </Switch>

    </Router>
)








ReactDOM.render(routing, document.getElementById('root'));