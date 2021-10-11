import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const {authedUser} = rest;
  const redirect = rest.location?.pathname;
  return (
    <Route
      {...rest}
      render={(props) =>
        authedUser ? (
          <Component {...props}></Component>
        ) : 
            (
             <Redirect to = {`/login?redirect=${redirect}`} /> 
            )
               
            
          
        
      }
    ></Route>
  );
}
function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(ProtectedRoute)