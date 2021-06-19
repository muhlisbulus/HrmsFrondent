import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import CityService from '../services/CityService'

export default function CityList() {
  const [city, setCity] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getcities().then(result => setCity(result.data.data))
    }, [])

  
    return (
        <div>
        style={{display:"flex",alignContent:"center",justifyContent:"center",marginTop:10}}>
            
            <Select search  onChange={event => console.log(event.target.value)}>
                                {
                                    city.map(c =>(
                                        <option key={c.cityId} defaultValue="0" value={c.cityId} data-key={c.cityId}  >
                                        {c.cityName}
                                    </option>

                                    ))
                                }
                              
                            </Select>
        </div>
    )
}
