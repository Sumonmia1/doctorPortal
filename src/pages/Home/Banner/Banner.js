import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter,textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Stmile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            My name is Sumon. i am a Student . i am a civil engenear LGED. incideutn dolorem visited at accument tenetur.
                            My name is Sumon. i am a Student . i am a civil engenear LGED. incideutn dolorem visited at accument tenetur.
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#SCE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;