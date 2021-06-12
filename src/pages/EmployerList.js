import React, { useEffect, useState } from 'react'
import { Table} from 'semantic-ui-react'
import EmployeerService from '../services/EmployeerService'

export default function EmployerList() {
    const [employers, setemployers] = useState([])
    useEffect(() => {
    let employerService=new EmployeerService();
    employerService.getEmployers().then((result) =>setemployers(result.data.data))
    

        
    }, [])
    return (
        <div>
             <Table.Header>
      <Table.Row>
       
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Web </Table.HeaderCell>
        <Table.HeaderCell>E-Mail </Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
          titles.map((employer) => (
          <Table.Row key={employer.id}>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell>{employer.web}</Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
            <Table.Cell>{employer.email }</Table.Cell>
           
          </Table.Row>))
      }
      
    
    </Table.Body>

            
        </div>
    )
}
