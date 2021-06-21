import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu ,Button,Icon} from 'semantic-ui-react'
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut(params){
    setIsAuthenticated(false)
  }
  function handleSignIn(params){
    setIsAuthenticated(true)
  }
  
    return (
        <div>
             <Menu inverted fixed="top" size="mini" >
               
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
          
          <Menu.Item >
            <Button  primary as={Link} to={"/addAdvertisement"}>
              İlan Ekle
            </Button>
            
         
          
    
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>

    
    </Menu.Item>

  
    
    
    
    <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}
            </Menu.Item>
            </Menu.Menu>
        </Container>
      </Menu>
    
        </div>
    )
}
