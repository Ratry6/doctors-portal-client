import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Single-Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';


const services = [
    {
        name : ' Fluoride ',
        description : 'a lot of description will be added here',
        img: fluoride
    },
    {
        name :' Cavity ',
        description : 'a lot of description will be added here',
        img: cavity
    },
    {
        name :' Whitening ',
        description : 'a lot of description will be added here',
        img:  whitening
    }
]

const Services = () => {
  
    return (
        <Box sx={{ flexGrow: 1 }}>
           <Typography sx={{ fontWeight : 500, m:2, color:'success.main'}} variant="h6" component="div">
          Our Services
        </Typography>
           <Typography sx={{ fontWeight : 600,m:5 }} variant="h4" component="div">
          Services we provide
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map((service, index) => (
            <Grid item xs={2} sm={4} md={4} key={services.name}>
            <Service 
             service = {service}
            ></Service>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};

export default Services;