import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import CityService from '../services/CityService'

export default function CityList() {
  const [cities, setcities] = useState([])
  useEffect(() => {
      let cityService=new CityService()
      cityService.getcities().then((result) => setcities(result.data.data))
      
      
  }, [])
    return (
        <div>
             <Table.Header>
      <Table.Row>
       
        <Table.HeaderCell>City Name</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
          titles.map((city) => (
          <Table.Row key={city.id}>
            <Table.Cell>{city.cityName}</Table.Cell>
           
          </Table.Row>))
      }
      
    
    </Table.Body>

        </div>
    )
}
