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
            I pride myself in developing user-friendly UI/UX and generating pages that are both stable and eye-catching!
            Knowing the competitive nature of this market, I truly believe my previous experiences in education and realizing the importance of life-long learning will be an asset
            to both me, and my employers. As technology in the web-development field advances, developers must be prepared to adapt and learn (or re-learn) various concepts!
          </p>
        </Segment>
      </Container>
    </>
  );
};

export default AboutMe;
