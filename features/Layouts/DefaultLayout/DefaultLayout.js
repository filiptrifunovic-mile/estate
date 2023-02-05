import Footer from "@/features/common/Footer";
import Navigation from "@/features/common/Navigation";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
