import React from "react";
// import background from "../../../Images/bg-3.jpeg";
import {
  Container,
  Header,
  Divider,
  Segment,
  Icon,
} from "semantic-ui-react";
import "../../index.css";
// import Footer from '../Footer';
document.body.classList.add("bg");

const AboutMe = () => {
  return (
    <>
      <Container>
        <Container textAlign="center">
          <Segment basic textAlign="center">
            <Header color="violet" as="h1">
              <Header.Content>
                <Icon name="user" />
                About Me
              </Header.Content>
            </Header>
          </Segment>
        </Container>

        <Divider />

        <Segment basic textAlign="justified">
          <p style={{ fontSize: 18 }}>
            I have always been interested in programming and technology<br></br>
            I currently have a bachelor of science and education and work as a
            supply teacher for the thames valley district schoolboard.
          </p>

          <p style={{ fontSize: 18 }}>
            I have recently reignited my passion for programming and have been
            polishing my skills and resume to enter this competitive job market!
          </p>
        </Segment>
      </Container>
    </>
  );
};

export default AboutMe;
