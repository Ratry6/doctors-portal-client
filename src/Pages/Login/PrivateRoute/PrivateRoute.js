import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/UseAuth';
import {Route, Redirect} from 'react-router-dom'


const PrivateRoute = ({children, ...rest}) => {
  const {user, isLoading} = useAuth();
  if(isLoading){
      return <CircularProgress/>
  }
    return (
      <Route
      {...rest}
      render = {({location})=>
      user.email ? (
          children
      ) : (
          <Redirect
          to= {{
              pathname :"/login",
              state : { from : location}
          }}
          />
      )
      
      }>

      </Route>
    );
};

export default PrivateRoute;