import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../Appointment/BookingModal/BookingModal';


const BookingAppointment = ({booking,date}) => {
 const {name, time, space,price, setAppointmentSuccess}= booking;
 const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{py:5}}>
            <Typography sx={{color : 'info.main', fontWeight: 600}} variant="h5" gutterBottom component="div">
        {name}
      </Typography>
            <Typography variant="h6" gutterBottom component="div">
        {time}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
       price : ${price}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
       {space} spaces available
      </Typography>
      <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
      
            </Paper>
        </Grid>
        <BookingModal
        booking={booking}
        date={date}
        setAppointmentSuccess={setAppointmentSuccess}
        handleClose= {handleClose}
        open={open}
        ></BookingModal>
        </>
    );
};

export default BookingAppointment;