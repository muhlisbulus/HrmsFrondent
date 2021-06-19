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
      <div style={{position:"relative", overflowX:"hidden",overflowY:"auto",maxWidth:"250px", alignContent: "center", justifyContent: "center", marginTop: 10,fontFamily:"Poppins",fontWeight:"500",fontSize:"2" }}>

      <Item.Group >
          <div style={{display:"flex",alignItems:"center",alignContent:"center",marginTop:10,marginBottom:10,maxWidth:"250px",overflowX:"hidden",overflowY:"auto"}}>
      <SearchInput  placeholder="Pozisyon Ara..." />
      </div>
        
     
        
     
      {
          titles.map((position) => (
        
         
         
            <Checkbox style={{marginTop:10}} key={position.id} label={position.title}  value={position.jobName} />
           
          ))
      }
      
    
    
    </Item.Group>

    </div>


     
            
      
      )
}
