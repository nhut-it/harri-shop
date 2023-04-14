import React from "react";
import Countdown from "react-countdown";
import { RiErrorWarningLine } from "react-icons/ri";
import vc1 from "../../assets/imgs/product-vc-1.webp";
import "./CardDeal.css";
import { Popover } from "antd";
const CardDeal = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // console.log("rest", rest);
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <ul className="flex countdown font-inter">
          <li className="p-3 pl-0 flex flex-col">
            <span>{days}</span>
            <span>DAY</span>
          </li>
          <li className="p-3 flex flex-col ">
            <span>{hours}</span>
            <span>HOURS</span>
          </li>

          <li className="p-3 flex flex-col">
            <span>{minutes}</span>
            <span>MiN</span>
          </li>
          <li className="p-3 flex flex-col">
            <span>{seconds}</span>
            <span>SEC</span>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="card-deal p-[20px] border-[1px] flex md:flex-row flex-col justify-between md:items-center items-start relative ">
      <div className="voucher-info  flex sm:flex-row flex-col items-start sm:items-start">
        <div className="voucher-img mr-[20px] w-[120px] h-[120px]">
          <img src={vc1} alt="" className="h-full w-full" />
        </div>
        <div className="voucher-body">
          <h3 className="text-[17px] font-bold">
            August Gift Voucher <br />{" "}
            <span className="text-[#ff2400]">10%</span>{" "}
            <span className="text-[#5B626D]">Off</span>
          </h3>
          <div className="countDown">
            <Countdown
              date={new Date("July 21, 2024 01:15:00")}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
      <div className="dotted h-full  border-l-2 border-dashed absolute top-0 right-[20%] md:right-[40%] "></div>
      <div className="coupon w-full md:w-auto text-center  text-[14px]  2xl:pr-[50px] pr-[30px] ">
        <p className="mb-[10px] coupon-text">
          <span>
            Coupon <span className="text-[#308830]">Active</span>{" "}
            <span className="relative">
              <RiErrorWarningLine className="inline text-[20px] text-[#bcbfc2] ml-[7px]" />
              <p className="popover min-w-[245px] pt-[13px] pb-[15px] px-[20px] bg-white shadow-md text-[12px]">
                *This coupon code will apply on{" "}
                <span className="text-black font-medium">
                  Grocery type products
                </span>{" "}
                and when you shopping more than{" "}
                <span className="text-black font-medium">$500</span>
              </p>
            </span>
          </span>
        </p>

        <button className="bg-[#E5F2F2] text-[#378A84] font-medium py-[6px] px-[30px] border-2 border-dashed border-[#89c4c4]">
          AUGUST23
        </button>
      </div>
    </div>
  );
};

export default CardDeal;
