import React, { useEffect, useState } from 'react'
import ResumeService from '../services/ResumeService'
export default function ResumeList() {
   const [resumes, setresumes] = useState([])
   useEffect(() => {
       let resumeService=new ResumeService()
       resumeService.getResumes().then((result)=>setresumes(result.data.data))
       
   }, [])
    return (
        <div>
             <Table celled color={"black"}>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>İş Arayan</Table.HeaderCell>
            <Table.HeaderCell>Teknolojiler</Table.HeaderCell>
            <Table.HeaderCell>Diller</Table.HeaderCell>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>Linkedin</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {resumes.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={cv.images[0].imageUrl} rounded size="mini" />
                  <Header.Content>
                    {cv.candidate.firstName + " " + cv.candidate.lastName}
                    <Header.Subheader>
                      {cv.candidate.dateOfBirth}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {cv.technologies.map((tech) => (
                  <p key={tech.id}>{tech.name}</p>
                ))}
              </Table.Cell>

              <Table.Cell>
                {cv.languages.map((lang) => (
                  <p key={lang.id}>{lang.name + " Seviye: " + lang.level}</p>
                ))}
              </Table.Cell>

              <Table.Cell>
                <a href={cv.github} target={"_blank"} rel="noopener noreferrer">
                  <Button secondary>
                    <Icon name="github" /> Github
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <a href={cv.linkedin} target={"_blank"} rel="noopener noreferrer">
                  <Button color="linkedin">
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <Button animated as={Link} to={`/cvs/${cv.candidate.id}`}>
                  <Button.Content visible>Detayları Gör</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
