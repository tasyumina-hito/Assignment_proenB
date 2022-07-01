import React, { useState } from "react";
import Box from "@mui/material/Box";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const Database = () => {
    const handleFailure = (result) => {
        alert(result);
    };
    const handleLogin = (googleData) => {
        console.log(googleData);
    };
    return (
        <Box item xs={8}>
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFAilure={handleFailure}
                cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
        </Box>
    )
}

export default Database
