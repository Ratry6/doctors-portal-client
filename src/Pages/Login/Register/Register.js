import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid } from '@mui/material';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';



const Register = () => {
    const {registerUser, isLoading,user, error} = useAuth();
   const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password does not match');
            return
        }
   console.log(loginData.email);
   console.log(loginData.password)
        registerUser(loginData.email, loginData.password,loginData.name, history)

        e.preventDefault();
    }
    return (
        <Container>

            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
              {  !isLoading &&  <form onSubmit={handleLoginSubmit}>
              <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="your name"
                            name="name"
                            type="text"
                            onBlur={handleOnChange}
                            variant="standard"
                            required />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="your email"
                            name="email"
                            type="email"
                            onBlur={handleOnChange}
                            variant="standard"
                            required />
                      
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="your password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard"
                            required />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="re-type your password"
                            type="password"
                            name="password2"
                            onBlur={handleOnChange}
                            variant="standard"
                            required />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register </Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login" >
                            <Button variant="text">Already Registered? Please Login</Button>

                        </NavLink>
                    </form>
                            }
                      {isLoading && <CircularProgress/>}      
                {user?.email && <Alert severity="success">Congrats! Your Account is created </Alert>}
                {error &&  <Alert severity="error">{error}</Alert>}
                
                </Grid>
                <Grid item xs={12} md={6}>
                    < img src={login} style={{ width: '100%' }} alt="" />
                </Grid>

            </Grid>




        </Container>
    );
};

export default Register;