import React from 'react'
import { Container, Grid, Icon, Segment} from 'semantic-ui-react'


const Footer = () => {
    return (
        <>
    <Container>
        
        <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row>
                <Grid.Column>
                <div class="dividerhoriz" id="footerbottom">
                 
             
                <Segment basic textAlign='center'>
                <a href="https://github.com/gammahazard" class="footeritems" target="_blank" rel="noreferrer"><Icon name='github' size='big' color='yellow' /></a>
                <a href="https://twitter.com/ErgoPixels" class="footeritems" target="_blank" rel="noreferrer"><Icon name='twitter' size='big' color='yellow' /></a>
                
                </Segment>
                </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
</>
 )
}

export default Footer;