import React, { Children, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./SidebarPopup.css";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/slices/SidebarPopupSlice";
const SidebarPopup = ({ children }) => {
  const open = useSelector((state) => state.sidebarPopup);
  const dispatch = useDispatch();
  return (
    <div className="menu-sidebar">
      <div
        onClick={() => dispatch(closeSidebar())}
        className={
          open
            ? "overlay active h-full w-full fixed top-0 left-0 right-0 bottom-0 opacity-90 bg-[#4A4B5B] z-30"
            : "overlay h-[100vh] w-screen fixed top-0 left-0 right-0 bottom-0 opacity-90 bg-[#4A4B5B] z-30"
        }
      ></div>
      <div
        className={
          open
            ? "sidebar-content active w-full sm:w-[360px] h-full overflow-y-scroll  bg-white fixed top-0 bottom-0 right-0  z-50"
            : "sidebar-content w-[360px] h-full overflow-y-scroll  bg-white fixed top-0 bottom-0 right-0  z-50"
        }
      >
        <div className="sidebar-wrapper relative pt-[50px] pb-[145px]  px-[40px] ">
          <div
            onClick={() => dispatch(closeSidebar())}
            className="close-btn w-[44px] h-[44px] rounded-full border-[1px] border-[#F1DAE6] leading-[44px] text-center flex justify-center items-center absolute top-[36px] right-[40px] hover:bg-primary cursor-pointer transititon duration-500"
          >
            <AiOutlineClose className="icon-close" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarPopup;
