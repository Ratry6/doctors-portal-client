import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid } from '@mui/material';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import {  NavLink,useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';

const Login = () => {
    const {user,logInUser,isLoading,signIn,error} = useAuth();
const [loginData, setLoginData] = useState({});

const location = useLocation();
const history = useHistory();

const handleOnChange = e =>{
const field = e.target.name;
const value= e.target.value;
// console.log(field, value);
const newLoginData = {...loginData};
newLoginData[field] = value;
setLoginData(newLoginData);

}

    const handleLoginSubmit = e =>{
        logInUser(loginData.email, loginData.password, location,history)
        e.preventDefault();
    }

    const handleGoogleSignIn =() =>{
    signIn(location, history);
}  
  return (
        <Container>

            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField 
            sx={{width :'75%', m:1 }}
            id="standard-basic" 
            label="your email" 
            name="email"
            onChange={handleOnChange}
            variant="standard"
            required />
            <TextField 
              sx={{width :'75%', m:1 }}
            id="standard-basic" 
            label="your password"
            type="password" 
            name="password"
            onChange={handleOnChange}
            variant="standard"
            required />
           
            <Button sx={{width :'75%', m:1 }} type="submit" variant="contained">Login </Button>
            <NavLink
            style={{textDecoration : 'none'}}
             to="/register" >
             <Button variant="text">New User? Please Register</Button>
               
           </NavLink>
           {isLoading && <CircularProgress/>}      
                {user?.email && <Alert severity="success">you are logging in successfully </Alert>}
                {error &&  <Alert severity="error">{error}</Alert>}
            </form>
            <p>--------------</p>
            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    < img src={login} style={{width: '100%'}} alt="" />
                </Grid>

            </Grid>
         



        </Container>
    );
};

export default Login;