import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const DefaultThemeplate = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
};

export default DefaultThemeplate;
