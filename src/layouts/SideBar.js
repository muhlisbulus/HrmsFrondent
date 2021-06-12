import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
          <Menu compact icon='labeled' vertical>
        <Menu.Item
          name='bullhorn'
        
        >
          <Icon color = "teal"name='bullhorn' />
         Job Title
        </Menu.Item>

        <Menu.Item
          name='user'
          
        >
          <Icon color = "teal" name='search' />
          Candidate
        </Menu.Item>

        <Menu.Item
          name='user'
          
        >
          <Icon color = "teal" name='group' />
          Employer
        </Menu.Item>
      </Menu>
        </div>
    )
}
