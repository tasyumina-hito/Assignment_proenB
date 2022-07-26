import React, { useState } from "react";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from "../../components/common/SearchBar/SearchBar";
import IconButton from '@mui/material/IconButton';
import CommonButton from "../../components/common/CommonButton/CommonButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';

const Authentication = () => {

    const getHeader = () => {
        const handleChange = (value) => {
            console.log(value);
        };

        const addUser = () => {
            console.log('click')
        };

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email address, phon number, or user UID"
                    onChange={(event) => handleChange(event.target.value)}
                    SearchBarWidth='720px'
                />
                <Box>
                    <CommonButton
                        variant="contained"
                        onClick={addUser}
                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        addUser
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    };

    const getContent = () => (
        <Typography
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}
        >
            <GoogleOAuthProvider clientId="process.env.">
                <GoogleLogin align="center"
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
                <CommonButton
                    variant="contained"
                    onClick={googleLogout()}
                    size="large"
                    sx={cardHeaderStyles.addUserButton}
                >
                    Logout
                </CommonButton>
            </GoogleOAuthProvider>
        </Typography>
    );

    return (
        <GridWrapper>
            <BasicCard 
                header={getHeader()}
                content={getContent()}
            />
        </GridWrapper>
    )
}

export default Authentication
