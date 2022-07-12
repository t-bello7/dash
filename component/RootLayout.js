import React from 'react';
import Header from './Header';
import Footer from './Footer';

const RootLayout = ({ children }) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
);
export default RootLayout;
