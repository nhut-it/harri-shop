import React from "react";
import { BsTruck } from "react-icons/bs";
import "./CardFeature.css";
const CardFeature = ({ title, content, icon }) => {
  return (
    <div className="flex card-feature">
      <div className="pr-[16px]">
        <span className=" w-[60px] h-[60px] rounded-full inline-flex border-[1px]  items-center justify-center">
          {/* <BsTruck className="text-[25px] icon-feature transition duration-400" /> */}
          {icon}
        </span>
      </div>
      <div className="">
        <p className="text-[18px] mb-[5px] font-medium">{title}</p>
        <span className="text-[15px] text-content pr-[16px]">{content}</span>
      </div>
    </div>
  );
};

export default CardFeature;
