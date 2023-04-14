import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";
import "./DefaultThemeplate.css";
const DefaultThemeplate = () => {
  const [showBtnTop, setshowBtnTop] = useState("");
  const scrollToTop = () => {
    window.scrollY > 100 ? setshowBtnTop("show ") : setshowBtnTop("");
  };
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", scrollToTop);
    }
    return () => window.removeEventListener("scroll", scrollToTop);
  });

  return (
    <div className="bg-[#FFFF]">
      <motion.div
        whileHover={{
          transform: "translateY(-10px)",
        }}
        onClick={() => window.scrollTo(0, 0)}
        className={`scroll-top z-40 cursor-pointer w-[40px] h-[40px] rounded-full bg-black fixed bottom-[50px] right-[68px] flex justify-center items-center ${showBtnTop}`}
      >
        <MdOutlineKeyboardArrowUp className="text-white text-[25px]" />
      </motion.div>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
};

export default DefaultThemeplate;
