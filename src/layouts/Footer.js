import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Button,
} from "semantic-ui-react";

export default function footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{  padding:"0",
          margin:"0",
          overflow:"auto",
          
          bottom:"0",
          height:"7em",
          width:"100%"
         }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={6}>
              <Header
                inverted
                as="h4"
                content="Human Resource Management Systems"
                
              />
              <p> Bu Site Muhlis Buluş Tarafından Yapılmıştır</p>
            </Grid.Column>
         

            <Grid.Column width={6}>
              <Header inverted as="h4" content="Follow Us" />
              <br />
              <Button circular color="facebook" icon="facebook" />

              <Button circular color="instagram" icon="instagram" />

              <Button circular color="twitter" icon="twitter" />

              <Button circular color="linkedin" icon="linkedin" target="blank"  href="https://www.linkedin.com/in/muhlis-buluş-3a169a1b4/" />

              <Button
                circular
                color="github"
                icon="github"
                target="blank"
                href="https://github.com/muhlisbulus"
              />

              <Button circular color="google plus" icon="google plus" />
            </Grid.Column>

            <Grid.Column width={3}>
              <Image src="" size="small" />
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        
        </Container>
      </Segment>
    </div>
  );
}