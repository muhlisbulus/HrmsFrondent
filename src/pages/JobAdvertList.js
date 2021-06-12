import React, { useEffect, useState } from 'react'
import { Table,Header,Icon } from 'semantic-ui-react'
import JobAdvertService from '../services/JobAdvertService'

export default function JobAdvertList() {
    const [adverts, setAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService=new JobAdvertService();
        jobAdvertService.getJobAdverts().then((result)=>setAdverts(result.data.data));

       
    }, [])
    return (
        
        <div>
            <Header as="h2" color="teal">
                <Icon name="briefcase"/>
            <Header.Content>Job Advert List</Header.Content>
                

            </Header>
            <Table color="teal" key="teal"></Table>
              <Table singleLine>
    <Table.Header>
       <Table color="teal" key="teal"></Table>
      <Table.Row>
        <Table.HeaderCell>Job Title</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Max Salary</Table.HeaderCell>
        <Table.HeaderCell>Min Salary</Table.HeaderCell>
        
        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {adverts.map((advert) =>{
      <Table.Row key={advert.id}>
        <Table.Cell>{advert.title.title}</Table.Cell>
        <Table.Cell>{advert.employer.companyName}</Table.Cell>
        <Table.Cell>{advert.city.cityName}</Table.Cell>
        <Table.Cell>{advert. description}</Table.Cell>
        <Table.Cell>{advert.maxSalary}</Table.Cell>
        <Table.Cell>{advert.minSalary}</Table.Cell>
        <Table.Cell>{advert.openPositions}</Table.Cell>
        <Table.Cell>No</Table.Cell>
    </Table.Row>
      })}
    </Table.Body>
     </Table>
        </div>
    )
}
