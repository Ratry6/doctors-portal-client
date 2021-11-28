import React from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import BookingAppointment from '../../Booking/BookingAppointment';
import { useState } from 'react';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 30,
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10:00 AM- 11:00 AM',
        price: 15,
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11:00 AM - 12:00 PM',
        price: 35,
        space: 10
    },
    {
        id: 5,
        name: 'name 5',
        time: '7pm-8pm',
        price: 50,
        space: 10
    },
    {
        id: 6,
        name: 'name 6',
        time: '7pm-8pm',
        price: 40,
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {
 const [appointmentSuccess, setAppointmentSuccess] = useState(false);
 
  
    return (
        
            <Container>
                <Typography variant='h4' sx={{color : 'info.main', my: 4}}>Available Appointments on  {date.toDateString()}</Typography>
                {appointmentSuccess && <Alert severity="success">Appointment Confirmed </Alert>}
                <Grid container spacing={2}>
                     {
                         bookings.map( booking => <BookingAppointment 
                         key={booking.id}
                         booking={booking}
                         date={date}
                         setAppointmentSuccess={setAppointmentSuccess}
                         ></BookingAppointment> )
                     }   
                </Grid>
               

            </Container>
          
    );
};

export default AvailableAppointments;