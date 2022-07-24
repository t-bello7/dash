import '../styles/globals.css';
import React from 'react';
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps:{session, ...pageProps} }) => {
    return (
    <SessionProvider session={pageProps.session}> 
        <Component {...pageProps} /> 
    </SessionProvider>
    )};

export default MyApp;
