import React from 'react'
import { Route } from 'react-router'
import { Grid, Sidebar } from 'semantic-ui-react';
import Home from '../pages/Home';
import JobAdvertAdd from '../pages/JobAdvertAdd';
import JobAdvertList from '../pages/JobAdvertList';
import JobAdvertDetail from '../pages/JobAdvertDetail';


import Navi from './Navi'
import Section from './Section';



export default function Dashboard() {
    return (
        <div>
            <Grid style={{marginTop:"50px"}}>
        <Grid.Row>
          
          <Grid.Column width={12}>
            <Section/>
          </Grid.Column>
          <Grid.Column width={12} mobile={16} tablet={10} computer={12} >
            
              
              
               <Route exact path="/jobAdvertList" component={JobAdvertList}/>
               <Route exact path="/addAdvertisement" component={JobAdvertAdd}/> 
               <Route exact path="/home" component={Home}/>
               <Route path="/jobAdverts" component={JobAdvertDetail}/>

                </Grid.Column>
        </Grid.Row>
        
        </Grid>

        </div>
    )
}
