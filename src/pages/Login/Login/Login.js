import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    // State declare
    const [loginData, setLoginData] = useState({});
    const { user, loginUser,signInwithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // input field declare 
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    // button field declare email password
    const handleLoginSubmit = () => {
        console.log(loginData);
        loginUser(loginData.email, loginData.password, location, history);
        /*   e.preventDefault(); */
    }


// Google signIn handle button
const handleGoogleSignIn = () => {
    signInwithGoogle(location,history);
}


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="Standard-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />


                        {/* Login button */}
                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit" variant="contained" onClick={handleLoginSubmit}>Login</Button>


                        {/* Register buton */}
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New user? Pleace Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successFully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
<p>---------------------</p>
<Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;