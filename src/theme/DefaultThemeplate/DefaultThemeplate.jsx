import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const DefaultThemeplate = () => {
  return (
    <div className="bg-[#F5F7F9]">
      <Header />
      <div className="mt-[78px] h-[1000px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultThemeplate;
