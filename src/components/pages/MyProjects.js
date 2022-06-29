import React from "react";
import {
  Card,
  Icon,
  Button,
  Container,
  Header,
  Segment,
} from "semantic-ui-react";

const MyApps = [
  {
    image: "/Images/HiveMind.png",
    title: "HiveMind",
    description:
      "A mental health community application to connect mental health advocates in a place where they can share tips and get daily inspiration to remain mindful of their own mental health.",
    link: "https://hivemind-442.herokuapp.com/",
    id: "HiveMind"
  },
  {
    image: "/Images/marvel-search-engine.png",
    title: "Marvel Search Engine",
    description: "",
    link: "https://sevaggap.github.io/UofT-SCS-Coding-Bootcamp-Project-1-Interactive-Front-End-Application/",
  },
  {
    image: "/Images/tech-blog.png",
    title: "Tech Blog",
    description:
      "A tech-blog with a front and back end where users can discuss about tech!",
    link: "https://techblogmvc1221.herokuapp.com/",
  },
  {
    image: "/Images/read-me-generator.png",
    title: "ReadMe Generator",
    description:
      "A Read-me generator to generate a readme.md for any type of project!",
    link: "https://github.com/gammahazard/Generate-A-Readme",
  },
  {
    image: "/Images/cyberia-estates.jpg",
    title: "Cyberia Estates",
    description:
      "A webpage designed for CyberCitizens showcasing their latest NFT drop, CyberCitizens is a blockchain-based game integrated into the ERGO blockchain",
    link: "https://cybercitizens.io/pages/cyberia-estates.html",
  },
  {
    image: "/Images/gen1.png",
    title: "CyberCitizens - GEN 1 page",
    description:
      "A webpage designed for CyberCitizens showcasing their first NFT drop, including an option to search through NFTs based on name! CyberCitizens is a blockchain-based game integrated into the ERGO blockchain",
    link: "https://cybercitizens.io/pages/explore-gen1.html",
  },
];

const extra = (link) => (
  <a href={link} target="_blank" rel="noreferrer">
    <Button basic attached="bottom" color="black" content="View this Project" />
  </a>
);

const MyProjects = () => {
  return (
    <Container>
      <Segment basic textAlign="center">
        <Header color="violet" as="h1">
          <Header.Content>
            <Icon name="clipboard" />
            My Projects
            <div class="project-links">
              <a id="hivemind" href='Hivemind'>Hivemind</a>
            </div>
          </Header.Content>
        </Header>
      </Segment>
      <>
        <div id="projectsofmine">
          {MyApps.map((project, i) => (
            <Card
              fluid
              key={i}
              image={process.env.PUBLIC_URL + `${project.image}`}
              header={project.title}
              description={project.description}
              extra={extra(project.link)}
            />
          ))}
        </div>
      </>
    </Container>
  );
};

export default MyProjects;
