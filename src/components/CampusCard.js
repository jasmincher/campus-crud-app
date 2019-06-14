//this will contain the campus img, campus name, # of students,
// and an edit link, this will show up several times, in the campus listing.

import React from 'react'
import '../ CSS/StudentCard.css'

// import Card from 'react-bootstrap/Card'
// import {Bootstrap, Grid, Row, Col} from 'react-bootstrap'

function CampusCard(props) {
    return(
       // <div className="card">
            
                <div className='card'>
                <h1>Campuses</h1>
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="..." id="imgCampus" class="card-img" alt="..."></img>
                        </div>
        
                   <div class="col-md-8">
                     <div class="card-body">
                    <h5 class="card-title" id="campusName">Lehman College</h5>
                    <p class="card-text" id="campusAddress"></p>
                    <p class="card-text" id="description">Lehman College an Amazing campus located in the heart of the Bronx </p>
                    
                     </div>
                   </div>
                   </div>
                </div>
                    
                              
        
        

          <div className="card">
          <p>{props.imgCampus}</p>    
          <p>{props.campusName}</p>
          <p>{props.campusAddress}</p>
          <p>{props.Description}</p>

          </div>

        </div>
        //</div>
    
    );
} 

export default CampusCard;