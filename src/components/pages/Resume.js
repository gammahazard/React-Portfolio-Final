import React from "react";
import {
  Segment,
  Container,
  Header,
  Icon,
} from "semantic-ui-react";
import "../../index.css";

const Resume = () => {
  return (
    <>
      <Container textAlign="center">
        <Segment basic textAlign="center">
          <Header color="violet" as="h1">
            <Header.Content>
              <Icon name="computer" />
              My Resume
            </Header.Content>
          </Header>
        </Segment>
      </Container>

      <Segment style={{ fontSize: 20 }} basic textAlign="center">
        <iframe src="/Images/resume.pdf" width="50%" height="500rem"></iframe>
      </Segment>
    </>
  );
};

export default Resume;
