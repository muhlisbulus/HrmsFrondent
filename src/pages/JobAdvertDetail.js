import React, { useEffect, useState } from 'react'
import EmployeerService from '../services/EmployeerService';
import { Table, Header, Icon, Button } from "semantic-ui-react";

export default function JobAdvertDetail() {
    const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployeerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

    return (

        <div>
              <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Detail</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
           
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key = {employer.id}>
              
              <Table.Cell>{employer.web}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}

