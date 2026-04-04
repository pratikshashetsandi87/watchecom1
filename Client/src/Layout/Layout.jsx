import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
  <Header />
<div className="main-content" style={{paddingTop: '80px', paddingBottom: '120px'}}>
    {children}
  </div>
  <Footer />
</>
  );
};

export default Layout;