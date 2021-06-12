import React from 'react'
import { Container, Menu ,Button,Icon} from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
             <Menu inverted fixed="top">
                 <Container>
                 <Menu.Item name="building outline" >
        <Icon name="bullseye" size="large" color="orange"    />
           HRMS
          </Menu.Item>
        <Menu.Item
          name='Home'/>
        <Menu.Item
          name='Job Advert'/>
        <Menu.Item
          name='friends'/>
      
       <Menu.Item position="right">

    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
    <Button circular color='instagram' icon='instagram' />
    
    </Menu.Item>

    <Menu.Item position="right">
    <Button.Group>
    
    <Button color="blue">Sign-in</Button>
    <Button.Or />
    <Button positive color="green">Sign-Up</Button>
  </Button.Group>
    </Menu.Item>
    
        </Container>
      </Menu>
    
        </div>
    )
}
