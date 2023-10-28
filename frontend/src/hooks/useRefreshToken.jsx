import { useEffect, useState } from 'react';

const useRefreshToken = () => {
    const [accessToken, setAccessToken] = useState(
        localStorage.getItem('access_token')
    );
    const [refreshToken, setRefreshToken] = useState(
        localStorage.getItem('refresh_token')
    );

    useEffect(() => {
        const getRefreshToken = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/token/refresh`,
                    {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify({
                            refresh: refreshToken,
                        }),
                    }
                );

                if (response.status === 200) {
                    const data = await response.json();
                    // localStorage.setItem('access_token', data.access);
                    // localStorage.setItem('refresh_token', data.refresh);
                    setAccessToken(data.access);
                    setRefreshToken(data.refresh);
                } else {
                    console.log('Error refreshing token:', response.status);
                }
            } catch (error) {
                console.log('Error refreshing token:', error);
            }
        };

        getRefreshToken();
    }, [accessToken, refreshToken]);

    return {
        accessToken,
        refreshToken,
        setAccessToken,
        setRefreshToken,
    };
};

export default useRefreshToken;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useJwtTokenReset = () => {
//     const [jwtToken, setJwtToken] = useState(null);

//     useEffect(() => {
//         const jwtToken = localStorage.getItem('jwtToken');
//         if (jwtToken) {
//             setJwtToken(jwtToken);
//         }
//     }, []);

//     const resetJwtToken = () => {
//         localStorage.removeItem('jwtToken');
//         setJwtToken(null);
//     };

//     return {
//         jwtToken,
//         resetJwtToken,
//     };
// };