import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography, Button , Container} from '@mui/material';

const bannerBg = {
    background : `url(${bg})`,
   
}

const verticalCenter = {
    display : 'flex',
    alignItems : 'center',
     height :' 400px'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={{...verticalCenter,textAlign : 'left'}} item xs={12} md={6}>
             <Box>
             <Typography variant="h3">
                    Your New Smile <br/>
                    Starts Here
              </Typography>
              <Typography variant="h6" sx={{fontSize : 12, my:3, color: 'gray', fontWeight: 300 }}>
              description  description  description  description  description  description  description  description  description  description  description  description
              </Typography>
              <Button variant="contained" style={{backgroundColor : '#5CE7ED'}}>Get Appointment</Button>
             </Box>
            
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
          <img 
          style={{width:'400px'}}
          src={chair} alt="" />
          </Grid>
         
        </Grid>
      </Container>
    );
};

export default Banner;