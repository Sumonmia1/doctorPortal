import { Button, Container, Grid, TextField, Typography,CircularProgress,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setloginData] = useState({})
    const history = useHistory();
    const {user, registerUser, isLoading,authError } = useAuth();

    // input field declare
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setloginData(newLoginData);
    }


    // button field declare
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return    
        }
        registerUser(loginData.email, loginData.password,loginData.name,history);
        e.preventDefault();

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="Standard-basic"
                            label=" Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />
                          <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="Standard-basic"
                            label="Retype Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />


                        {/* Login button */}
                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit" variant="contained">Register</Button>


                        {/* Register buton */}
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Allready registered? Pleace Login</Button>
                        </NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully alert — check it out!</Alert> }
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;