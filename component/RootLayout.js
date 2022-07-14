import React from 'react';
import Header from './Header';
import Footer from './Footer';

const RootLayout = ({ children }) => (
  
  <React.StrictMode>
    <Header />
    {children}
    <Footer />
 </React.StrictMode>

);
export default RootLayout;
