import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div className="px-[10px] sm:px-auto sm:container mx-auto">
      <div className=" p-[35px] sm:p-[60px] md:p-[100px] h-[460px] bg-[#F0F2ED] bg-home-banner   bg-[20%] bg-cover  md:bg-[18%] md:bg-cover lg:bg-[50%]">
        <div className="max-w-[400px]">
          <h4 className="text-[15px] mb-[7px] text-content font-medium">
            Apple iPhone 12 Pro
          </h4>
          <a
            href=""
            className="text-[28px] sm:text-[44px] font-roboto text-title font-bold leading-[1] mb-[27px] inline-block hover:text-primary transition duration-500"
          >
            The wait is on: iphone 12 max pro
          </a>
          <p className="text-content font-roboto mb-[35px]">
            Last call for up to{" "}
            <span className="text-[24px] text-title font-bold">32%</span> off!
          </p>
          <a
            href=""
            className="py-[9px] px-[25px] bg-white shadow-md text-[14px] font-medium hover:bg-primary hover:text-white transition duration-400 inline-block"
          >
            Buy Now{" "}
            <BiRightArrowAlt className="icon-arrow inline text-[20px] ml-[-4px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
