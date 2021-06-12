import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import JobTitleService from '../services/JobTitleService'

export default function JobTitleList() {
    const [titles, settitles] = useState([])
useEffect(() => {
   let jobTitleService=new JobTitleService()
   jobTitleService.getJobTitles().then((result)=>settitles(result.data.data));
}, [])
    return (
        <div>
          <Table.Header>
      <Table.Row>
       
        <Table.HeaderCell>Job Title Name</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
          titles.map((title) => (
          <Table.Row key={title.id}>
            <Table.Cell>{title.title}</Table.Cell>
           
          </Table.Row>))
      }
      
    
    </Table.Body>

    </div>


     
            
      
      )
}
