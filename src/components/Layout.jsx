import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/Layout.css';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
