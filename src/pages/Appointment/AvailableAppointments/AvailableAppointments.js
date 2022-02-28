import React, { useState } from 'react';
import { Container, Grid, Typography, Alert } from '@mui/material';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '9.00 AM - 12.00 PM',
        space: 2,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.00 AM - 03.00 PM',
        space: 4,
    },
    {
        id: 3,
        name: 'Teeth Claning',
        time: '11.00 AM - 7.00 AM',
        space: 7,
    },
    {
        id: 4,
        name: 'cavity Protection',
        time: '06.00 PM - 02.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '07.00 PM - 09.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '08.00 PM - 10.00 PM',
        space: 5,
    },
    {
        id: 6,
        name: 'cavity Protection',
        time: '09.00 PM - 11.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'cavity Protection',
        time: '10.00 AM - 01.00 PM',
        space: 10,
    },
]


const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSucces] = useState(false)
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 2, fontWeight: 600 }}>Availale Appointments: {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successFully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSucces={setBookingSucces}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
