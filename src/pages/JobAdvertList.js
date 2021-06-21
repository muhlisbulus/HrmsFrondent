import React, { useEffect, useState } from 'react'
import JobAdvertService from '../services/JobAdvertService';
import { Table, Button, Header, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default function JobAdvertList() {
    const [adverts, setadverts] = useState([]);
    useEffect(() => {
        
        let jobAdvertisementService=new JobAdvertService()
        jobAdvertisementService.getJobAdverts().then(result=>setadverts(result.data.data))
        
    }, [])
    console.log(adverts)
    const itemStyle = {
        borderRadius:20,
        border:"1px solid #f1f5f8",
        background:"#f1f5f8",
        maxWidth:850,
       fontFamily:"Poppins",
       
    
      }
    return (
        <div>
           <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content  >Job Advert List</Header.Content>
      </Header>
      <Table color="green" key="green" margin-top="5" size="huge">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell> Description</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {adverts.map((advert) => (
            <Table.Row key={advert.id}>
            <Table.Cell>{advert.jobTitle.title}</Table.Cell>
              <Table.Cell>{advert.description}</Table.Cell>
              <Table.Cell>{advert.employer.companyName}</Table.Cell>
              <Table.Cell>{advert.city.cityName}</Table.Cell>
              <Table.Cell>{advert.openPositions}</Table.Cell>
              
              <Table.Cell>
              <Button.Group>
              <Button color="blue"as={Link} to={"/jobAdverts"}>Wiew</Button>
            </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
        }
      
      

      
      
     

      