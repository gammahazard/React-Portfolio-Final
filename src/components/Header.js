import React, {  useState } from 'react'
import { Grid, Menu, Container} from 'semantic-ui-react'
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../index.css';

// import Footer from './pages/Footer';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // checks current page , renders page 
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'MyProjects') {
      return <MyProjects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
  };

    return (
      
      <div class="navbar">
      <Grid>
        <Grid.Column width={16}>
          <Menu  inverted size='massive' fluid horizontal>
       
          
            <Menu.Item color='orange'
              name='About Me'
              active={currentPage === 'AboutMe'}
              onClick={()=> setCurrentPage('AboutMe')}
            />
            <Menu.Item color='orange'
              name='My Projects'
              active={currentPage === 'MyProjects'}
              onClick={()=> setCurrentPage('MyProjects')}
            />
            <Menu.Item color='orange'
              name='Resume'
              active={currentPage === 'Resume'}
              onClick={()=> setCurrentPage('Resume')}
            />
            <Menu.Item color='orange'
              name='Contact'
              active={currentPage === 'Contact'}
              onClick={()=> setCurrentPage('Contact')}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={15}>
          {renderPage()}
        </Grid.Column>
        <Container>
          <Footer />
          </Container>
      </Grid>
      </div>
      
    )
  }