import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu ,Button,Icon} from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
             <Menu inverted fixed="top">
                 <Container>
                 <Menu.Item name="building outline" >
        <Icon name="bullseye" size="large" color="orange"    />
           HRMS
           <Menu size="large" inverted stackable>
        <Container>
          <Menu.Item name="Ana Sayfa" as={Link} to={"/home"}>
          <Icon name="home" />Ana Sayfa
          </Menu.Item>
          <Menu.Item name="İş ilanları" as={Link} to={"/jobAdvertList"} />
          <Menu.Item name="Cvler" as={Link} to={"/cvs"} />

          <Menu.Menu position="right" style={{ margin: '0.5em' }}>
            <Button primary as={Link} to={"/addAdvertisement"}>
              İlan Ekle
            </Button>
            
            <Button.Group>
              <Button as={Link} to={"/login"}>Giriş yap</Button>
              <Button.Or />
              <Button positive as={Link} to={"/register"}>Kaydol</Button>
            </Button.Group>
            
           <Button circular color='facebook' icon='facebook' />
           <Button circular color='twitter' icon='twitter' />
           <Button circular color='linkedin' icon='linkedin' />
           <Button circular color='google plus' icon='google plus' />
           <Button circular color='instagram' icon='instagram' />
    
          </Menu.Menu>
        </Container>
      </Menu>

    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
    <Button circular color='instagram' icon='instagram' />
    
    </Menu.Item>

  
    
    
    
    
        </Container>
      </Menu>
    
        </div>
    )
}
