import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


// javascript deye img neye aslam
const appointmentBanner = {
    background:`url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode:'darken,luminosity',
    marginTop: 175
}


const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400,marginTop:'-110px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start' ,textAlign:'left',
                 alignItems: 'center'
            }}>
                  <Box>
                  <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
                        Appointment
                    </Typography>
                    <Typography variant="h4"  style={{color:'white'}}>
                     Make an appointment Today
                    </Typography>
                    <Typography variant="h6"  sx={{my:5}}style={{color:'white',fontSize:14,fontWeight:300}}>
                   Make an appointment Today my name is sumon i am a doctors . i am very integigent doctore . Make an appointment Today my name is sumon i am a doctors . i am very integigent doctore
                    </Typography>
                    <Button variant='contained' style={{backgroundColor:'#SCE7ED'}} >Learn more</Button>
                  </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;